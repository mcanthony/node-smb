var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * FlushResponse Constructor
 * @return {FlushResponse}
 */
function FlushResponse( options ) {
  
  if( !(this instanceof FlushResponse) )
    return new FlushResponse( options )
  
  Packet.call( this )
  
}

/**
 * FlushResponse Prototype
 * @type {Object}
 */
FlushResponse.prototype = {
  
  constructor: FlushResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( FlushResponse, Packet )
// Exports
module.exports = FlushResponse
