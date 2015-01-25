var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * FlushRequest Constructor
 * @return {FlushRequest}
 */
function FlushRequest( options ) {
  
  if( !(this instanceof FlushRequest) )
    return new FlushRequest( options )
  
  Packet.call( this )
  
}

/**
 * FlushRequest Prototype
 * @type {Object}
 */
FlushRequest.prototype = {
  
  constructor: FlushRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( FlushRequest, Packet )
// Exports
module.exports = FlushRequest
