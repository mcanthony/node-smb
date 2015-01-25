var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * CancelResponse Constructor
 * @return {CancelResponse}
 */
function CancelResponse( options ) {
  
  if( !(this instanceof CancelResponse) )
    return new CancelResponse( options )
  
  Packet.call( this )
  
}

/**
 * CancelResponse Prototype
 * @type {Object}
 */
CancelResponse.prototype = {
  
  constructor: CancelResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( CancelResponse, Packet )
// Exports
module.exports = CancelResponse
