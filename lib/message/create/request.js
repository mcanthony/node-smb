var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * CreateRequest Constructor
 * @return {CreateRequest}
 */
function CreateRequest( options ) {
  
  if( !(this instanceof CreateRequest) )
    return new CreateRequest( options )
  
  Packet.call( this )
  
}

/**
 * CreateRequest Prototype
 * @type {Object}
 */
CreateRequest.prototype = {
  
  constructor: CreateRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( CreateRequest, Packet )
// Exports
module.exports = CreateRequest
