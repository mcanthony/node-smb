var SMB = require( '../smb' )
var log = require( 'debug' )( 'SMB:PACKET' )

/**
 * SMB Packet Constructor
 * @return {Packet}
 */
function Packet() {
  
  if( !(this instanceof Packet) )
    return new Packet()
  
  this.header = new Packet.Header()
  
}

/**
 * Packet type lookup table
 * @type {Object}
 */
Packet.type = {}
Packet.type[ SMB.COMMAND.NEGOTIATE ] = 'Negotiate'
Packet.type[ SMB.COMMAND.SESSION_SETUP ] = 'SessionSetup'
Packet.type[ SMB.COMMAND.LOGOFF ] = 'Logoff'
Packet.type[ SMB.COMMAND.TREE_CONNECT ] = 'TreeConnect'
Packet.type[ SMB.COMMAND.TREE_DISCONNECT ] = 'TreeDisconnect'
Packet.type[ SMB.COMMAND.CREATE ] = 'Create'
Packet.type[ SMB.COMMAND.CLOSE ] = 'Close'
Packet.type[ SMB.COMMAND.FLUSH ] = 'Flush'
Packet.type[ SMB.COMMAND.READ ] = 'Read'
Packet.type[ SMB.COMMAND.WRITE ] = 'Write'
Packet.type[ SMB.COMMAND.LOCK ] = 'Lock'
Packet.type[ SMB.COMMAND.IOCTL ] = 'Ioctl'
Packet.type[ SMB.COMMAND.CANCEL ] = 'Cancel'
Packet.type[ SMB.COMMAND.ECHO ] = 'Echo'
Packet.type[ SMB.COMMAND.QUERY_DIRECTORY ] = 'QueryDirectory'
Packet.type[ SMB.COMMAND.CHANGE_NOTIFY ] = 'ChangeNotify'
Packet.type[ SMB.COMMAND.QUERY_INFO ] = 'QueryInfo'
Packet.type[ SMB.COMMAND.SET_INFO ] = 'SetInfo'
Packet.type[ SMB.COMMAND.OPLOCK_BREAK ] = 'OplockBreak'

/**
 * SMB Packet Header
 * @type {Function}
 */
Packet.Header = require( './header' )

/**
 * Identifies message type (req/res) and
 * message format (NOTIFY, ERROR, ...)
 * @param  {Buffer} buffer
 * @return {[type]}
 * @todo
 */
Packet.identify = function( buffer ) {
  
  var command = buffer.readUInt16LE( 12 )
  var flags = buffer.readUInt32LE( 16 )
  var isResponse = flags & SMB.PACKET.SERVER_TO_REDIR
  
  log( 'identifying', command.toString( 16 ), 'with', flags.toString( 2 ) )
  log( 'isResponse', isResponse )
  
  var type = Packet.type[ command ]
  if( type == null ) return void 0
  
  // 'OplockBreak' and 'LeaseBreak' have the same
  // command code, which means we have to distinguish
  // between them here, also they have more types
  // than just Request/Response, which have to distinguished
  // by checking their respective 'structureSize'
  if( type === 'OplockBreak' ) {
    throw new Error( 'Not implemented' )
  }
  
  var subtype = isResponse ? 'Response' : 'Request'
  var Ctor = SMB.Message[ type ][ subtype ]
  
  return Ctor
  
}

/**
 * Parse a message buffer
 * @param  {Buffer}  buffer
 * @return {Packet}
 * @todo
 */
Packet.parse = function( buffer ) {
  
  // Identify packet / message type
  var Message = Packet.identify( buffer )
  if( typeof Message !== 'function' ) {
    throw new Error( 'Unknown packet type' )
  }
  
  return new Message().parse( buffer )
  
}

/**
 * SMB Packet Prototype
 * @type {Object}
 */
Packet.prototype = {
  
  constructor: Packet,
  
  get isAsync()     { return !!this.getFlag( SMB.PACKET.ASYNC_COMMAND ) },
  get isResponse()  { return !!this.getFlag( SMB.PACKET.SERVER_TO_REDIR ) },
  get isRequest()   { return  !this.getFlag( SMB.PACKET.SERVER_TO_REDIR ) },
  get isCompound()  { return !!this.getFlag( SMB.PACKET.RELATED_OPERATIONS ) },
  get isSigned()    { return !!this.getFlag( SMB.PACKET.SIGNED ) },
  get isReplay()    { return !!this.getFlag( SMB.PACKET.REPLAY_OPERATION ) },
  
  getFlag: function( flag ) {
    return this.header.flags & flag
  },
  
  setFlag: function( flag ) {
    this.header.flags = this.header.flags | flag
  },
  
  parse: function( buffer ) {
    this.parseHeader( buffer )
    this.parsePayload(
      buffer.slice( this.header.structureSize )
    )
  },
  
  parseHeader: function( buffer ) {
    this.header.parse( buffer )
    return this
  },
  
  parsePayload: function( buffer ) {
    throw new Error( 'Not implemented' )
  },
  
  serialize: function() {
    throw new Error( 'Not implemented' )
  },
  
  toBuffer: function() {
    return Buffer.concat([
      this.header.toBuffer(),
      this.serialize()
    ])
  },
  
}

// Exports
module.exports = Packet
