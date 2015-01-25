var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * EchoResponse Constructor
 * @return {EchoResponse}
 */
function EchoResponse( options ) {
  
  if( !(this instanceof EchoResponse) )
    return new EchoResponse( options )
  
  Packet.call( this )
  
}

/**
 * EchoResponse Prototype
 * @type {Object}
 */
EchoResponse.prototype = {
  
  constructor: EchoResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( EchoResponse, Packet )
// Exports
module.exports = EchoResponse
