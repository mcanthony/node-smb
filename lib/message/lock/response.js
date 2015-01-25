var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * LockResponse Constructor
 * @return {LockResponse}
 */
function LockResponse( options ) {
  
  if( !(this instanceof LockResponse) )
    return new LockResponse( options )
  
  Packet.call( this )
  
}

/**
 * LockResponse Prototype
 * @type {Object}
 */
LockResponse.prototype = {
  
  constructor: LockResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( LockResponse, Packet )
// Exports
module.exports = LockResponse
