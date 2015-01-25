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
  
}

/**
 * CancelRequest Prototype
 * @type {Object}
 */
CancelRequest.prototype = {
  
  constructor: CancelRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( CancelRequest, Packet )
// Exports
module.exports = CancelRequest
