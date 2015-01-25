var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * TreeDisconnectResponse Constructor
 * @return {TreeDisconnectResponse}
 */
function TreeDisconnectResponse( options ) {
  
  if( !(this instanceof TreeDisconnectResponse) )
    return new TreeDisconnectResponse( options )
  
  Packet.call( this )
  
}

/**
 * TreeDisconnectResponse Prototype
 * @type {Object}
 */
TreeDisconnectResponse.prototype = {
  
  constructor: TreeDisconnectResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( TreeDisconnectResponse, Packet )
// Exports
module.exports = TreeDisconnectResponse
