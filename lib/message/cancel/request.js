var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * CancelRequest Constructor
 * @return {CancelRequest}
 */
function CancelRequest( options ) {
  
  if( !(this instanceof CancelRequest) )
    return new CancelRequest( options )
  
  Packet.call( this )
  
  this.stuctureSize = 0x0004
  this.reserved = 0x0000
  
}

/**
 * CancelRequest Prototype
 * @type {Object}
 */
CancelRequest.prototype = {
  
  constructor: CancelRequest,
  
  parsePayload: function( buffer ) {
    
    this.stuctureSize = buffer.readUInt16LE( 0 )
    this.reserved = buffer.readUInt16LE( 2 )
    
    return this
    
  },
  
  serialize: function() {
    
    var buffer = new Buffer( this.stuctureSize )
    
    buffer.writeUInt16LE( this.stuctureSize, 0 )
    buffer.writeUInt16LE( this.reserved, 2 )
    
    return buffer
    
  },
  
}

inherit( CancelRequest, Packet )
// Exports
module.exports = CancelRequest
