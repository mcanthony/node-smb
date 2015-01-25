var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * CloseRequest Constructor
 * @return {CloseRequest}
 */
function CloseRequest( options ) {
  
  if( !(this instanceof CloseRequest) )
    return new CloseRequest( options )
  
  Packet.call( this )
  
}

/**
 * CloseRequest Prototype
 * @type {Object}
 */
CloseRequest.prototype = {
  
  constructor: CloseRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( CloseRequest, Packet )
// Exports
module.exports = CloseRequest
