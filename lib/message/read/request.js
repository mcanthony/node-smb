var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * ReadRequest Constructor
 * @return {ReadRequest}
 */
function ReadRequest( options ) {
  
  if( !(this instanceof ReadRequest) )
    return new ReadRequest( options )
  
  Packet.call( this )
  
}

/**
 * ReadRequest Prototype
 * @type {Object}
 */
ReadRequest.prototype = {
  
  constructor: ReadRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( ReadRequest, Packet )
// Exports
module.exports = ReadRequest
