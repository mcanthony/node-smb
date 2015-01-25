var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * CloseResponse Constructor
 * @return {CloseResponse}
 */
function CloseResponse( options ) {
  
  if( !(this instanceof CloseResponse) )
    return new CloseResponse( options )
  
  Packet.call( this )
  
}

/**
 * CloseResponse Prototype
 * @type {Object}
 */
CloseResponse.prototype = {
  
  constructor: CloseResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( CloseResponse, Packet )
// Exports
module.exports = CloseResponse
