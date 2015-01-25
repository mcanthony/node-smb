var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * LogoffResponse Constructor
 * @return {LogoffResponse}
 */
function LogoffResponse( options ) {
  
  if( !(this instanceof LogoffResponse) )
    return new LogoffResponse( options )
  
  Packet.call( this )
  
  this.header.command = SMB.COMMAND.LOGOFF
  
  this.structureSize = LogoffResponse.size
  this.reserved = 0x0000
  
}

/**
 * LOGOFF Response payload size
 * @type {Number}
 */
LogoffResponse.size = 0x0004

/**
 * LogoffResponse Prototype
 * @type {Object}
 */
LogoffResponse.prototype = {
  
  constructor: LogoffResponse,
  
  parsePayload: function( buffer ) {
    
    this.structureSize = buffer.readUInt16LE( 0 )
    this.reserved = buffer.readUInt16LE( 2 )
    
    return this
    
  },
  
  serialize: function() {
    
    var buffer = new Buffer( this.structureSize )
    buffer.fill( 0 )
    
    buffer.writeUInt16LE( this.stuctureSize, 0 )
    buffer.writeUInt16LE( this.reserved, 2 )
    
    return buffer
    
  },
  
}

inherit( LogoffResponse, Packet )
// Exports
module.exports = LogoffResponse
