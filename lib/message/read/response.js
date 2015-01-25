var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * ReadResponse Constructor
 * @return {ReadResponse}
 */
function ReadResponse( options ) {
  
  if( !(this instanceof ReadResponse) )
    return new ReadResponse( options )
  
  Packet.call( this )
  
}

/**
 * ReadResponse Prototype
 * @type {Object}
 */
ReadResponse.prototype = {
  
  constructor: ReadResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( ReadResponse, Packet )
// Exports
module.exports = ReadResponse
