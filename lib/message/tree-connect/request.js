var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * TreeConnectRequest Constructor
 * @return {TreeConnectRequest}
 */
function TreeConnectRequest( options ) {
  
  if( !(this instanceof TreeConnectRequest) )
    return new TreeConnectRequest( options )
  
  Packet.call( this )
  
}

/**
 * TreeConnectRequest Prototype
 * @type {Object}
 */
TreeConnectRequest.prototype = {
  
  constructor: TreeConnectRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( TreeConnectRequest, Packet )
// Exports
module.exports = TreeConnectRequest
