var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * LogoffRequest Constructor
 * The LOGOFF Request packet is sent by the client
 * to request termination of a particular session.
 * @return {LogoffRequest}
 */
function LogoffRequest( options ) {
  
  if( !(this instanceof LogoffRequest) )
    return new LogoffRequest( options )
  
  Packet.call( this )
  
  this.header.command = SMB.COMMAND.LOGOFF
  
  this.structureSize = LogoffRequest.size
  this.reserved = 0x0000
  
}

/**
 * LOGOFF Request payload size
 * @type {Number}
 */
LogoffRequest.size = 0x0004

/**
 * LogoffRequest Prototype
 * @type {Object}
 */
LogoffRequest.prototype = {
  
  constructor: LogoffRequest,
  
  parsePayload: function( buffer ) {
    
    this.structureSize = buffer.readUInt16LE( 0 )
    this.reserved = buffer.readUInt16LE( 2 )
    
    return this
    
  },
  
  serialize: function() {
    
    var buffer = new Buffer( this.structureSize )
    
    buffer.writeUInt16LE( this.stuctureSize, 0 )
    buffer.writeUInt16LE( this.reserved, 2 )
    
    return buffer
    
  },
  
}

inherit( LogoffRequest, Packet )
// Exports
module.exports = LogoffRequest
