var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * EchoRequest Constructor
 * @return {EchoRequest}
 */
function EchoRequest( options ) {
  
  if( !(this instanceof EchoRequest) )
    return new EchoRequest( options )
  
  Packet.call( this )
  
}

/**
 * EchoRequest Prototype
 * @type {Object}
 */
EchoRequest.prototype = {
  
  constructor: EchoRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( EchoRequest, Packet )
// Exports
module.exports = EchoRequest
