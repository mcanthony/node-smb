var SMB = require( '../smb' )

/**
 * SMB Message Constructor
 * @return {Message}
 */
function Message() {
  
  if( !(this instanceof Message) )
    return new Message()
  
  this.header = new Message.Header()
  
}

/**
 * SMB Message Header
 * @type {Function}
 */
Message.Header = require( './header' )

/**
 * Identifies message type (req/res) and
 * message format (NOTIFY, ERROR, ...)
 * @param  {Buffer} buffer
 * @return {[type]}
 * @todo
 */
Message.identify = function( buffer ) {
  
  var command = buffer.readUInt16LE( 12 )
  var flags = buffer.readUInt32LE( 16 )
  var isResponse = flags & SMB.MESSAGE.SERVER_TO_REDIR
  
  // TODO
  
}

/**
 * Parse a message buffer
 * @param  {Buffer}  buffer
 * @return {Message}
 * @todo
 */
Message.parse = function( buffer ) {
  // TODO:
  // - [ ] Identify message
  // - [ ] Construct message object
  // - [ ] Parse message
}

/**
 * SMB Message Prototype
 * @type {Object}
 */
Message.prototype = {
  
  constructor: Message,
  
  get isAsync()     { return !!this.getFlag( SMB.MESSAGE.ASYNC_COMMAND ) },
  get isResponse()  { return !!this.getFlag( SMB.MESSAGE.SERVER_TO_REDIR ) },
  get isRequest()   { return  !this.getFlag( SMB.MESSAGE.SERVER_TO_REDIR ) },
  get isCompound()  { return !!this.getFlag( SMB.MESSAGE.RELATED_OPERATIONS ) },
  get isSigned()    { return !!this.getFlag( SMB.MESSAGE.SIGNED ) },
  get isReplay()    { return !!this.getFlag( SMB.MESSAGE.REPLAY_OPERATION ) },
  
  getFlag: function( flag ) {
    return this.header.flags & flag
  },
  
  setFlag: function( flag ) {
    this.header.flags = this.header.flags | flag
  },
  
  parse: function( buffer ) {
    this.header.parse( buffer )
    this.parsePayload(
      buffer.slice( this.header.structureSize )
    )
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
module.exports = Message
