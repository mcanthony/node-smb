var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * TreeConnectResponse Constructor
 * @return {TreeConnectResponse}
 */
function TreeConnectResponse( options ) {
  
  if( !(this instanceof TreeConnectResponse) )
    return new TreeConnectResponse( options )
  
  Packet.call( this )
  
}

/**
 * TreeConnectResponse Prototype
 * @type {Object}
 */
TreeConnectResponse.prototype = {
  
  constructor: TreeConnectResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( TreeConnectResponse, Packet )
// Exports
module.exports = TreeConnectResponse
