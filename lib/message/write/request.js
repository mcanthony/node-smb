var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * WriteRequest Constructor
 * @return {WriteRequest}
 */
function WriteRequest( options ) {
  
  if( !(this instanceof WriteRequest) )
    return new WriteRequest( options )
  
  Packet.call( this )
  
}

/**
 * WriteRequest Prototype
 * @type {Object}
 */
WriteRequest.prototype = {
  
  constructor: WriteRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( WriteRequest, Packet )
// Exports
module.exports = WriteRequest
