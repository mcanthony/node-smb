var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * QueryDirectoryResponse Constructor
 * @return {QueryDirectoryResponse}
 */
function QueryDirectoryResponse( options ) {
  
  if( !(this instanceof QueryDirectoryResponse) )
    return new QueryDirectoryResponse( options )
  
  Packet.call( this )
  
}

/**
 * QueryDirectoryResponse Prototype
 * @type {Object}
 */
QueryDirectoryResponse.prototype = {
  
  constructor: QueryDirectoryResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( QueryDirectoryResponse, Packet )
// Exports
module.exports = QueryDirectoryResponse
