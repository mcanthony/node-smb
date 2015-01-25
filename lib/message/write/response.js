var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * WriteResponse Constructor
 * @return {WriteResponse}
 */
function WriteResponse( options ) {
  
  if( !(this instanceof WriteResponse) )
    return new WriteResponse( options )
  
  Packet.call( this )
  
}

/**
 * WriteResponse Prototype
 * @type {Object}
 */
WriteResponse.prototype = {
  
  constructor: WriteResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( WriteResponse, Packet )
// Exports
module.exports = WriteResponse
