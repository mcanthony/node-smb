var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * TreeDisconnectRequest Constructor
 * @return {TreeDisconnectRequest}
 */
function TreeDisconnectRequest( options ) {
  
  if( !(this instanceof TreeDisconnectRequest) )
    return new TreeDisconnectRequest( options )
  
  Packet.call( this )
  
}

/**
 * TreeDisconnectRequest Prototype
 * @type {Object}
 */
TreeDisconnectRequest.prototype = {
  
  constructor: TreeDisconnectRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( TreeDisconnectRequest, Packet )
// Exports
module.exports = TreeDisconnectRequest
