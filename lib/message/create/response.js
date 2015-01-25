var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * CreateResponse Constructor
 * @return {CreateResponse}
 */
function CreateResponse( options ) {
  
  if( !(this instanceof CreateResponse) )
    return new CreateResponse( options )
  
  Packet.call( this )
  
}

/**
 * CreateResponse Prototype
 * @type {Object}
 */
CreateResponse.prototype = {
  
  constructor: CreateResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( CreateResponse, Packet )
// Exports
module.exports = CreateResponse
