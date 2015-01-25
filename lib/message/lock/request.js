var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * LockRequest Constructor
 * @return {LockRequest}
 */
function LockRequest( options ) {
  
  if( !(this instanceof LockRequest) )
    return new LockRequest( options )
  
  Packet.call( this )
  
}

/**
 * LockRequest Prototype
 * @type {Object}
 */
LockRequest.prototype = {
  
  constructor: LockRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( LockRequest, Packet )
// Exports
module.exports = LockRequest
