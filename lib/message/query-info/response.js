var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * QueryInfoResponse Constructor
 * @return {QueryInfoResponse}
 */
function QueryInfoResponse( options ) {
  
  if( !(this instanceof QueryInfoResponse) )
    return new QueryInfoResponse( options )
  
  Packet.call( this )
  
}

/**
 * QueryInfoResponse Prototype
 * @type {Object}
 */
QueryInfoResponse.prototype = {
  
  constructor: QueryInfoResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( QueryInfoResponse, Packet )
// Exports
module.exports = QueryInfoResponse
