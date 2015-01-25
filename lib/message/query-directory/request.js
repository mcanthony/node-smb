var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * QueryDirectoryRequest Constructor
 * @return {QueryDirectoryRequest}
 */
function QueryDirectoryRequest( options ) {
  
  if( !(this instanceof QueryDirectoryRequest) )
    return new QueryDirectoryRequest( options )
  
  Packet.call( this )
  
}

/**
 * QueryDirectoryRequest Prototype
 * @type {Object}
 */
QueryDirectoryRequest.prototype = {
  
  constructor: QueryDirectoryRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( QueryDirectoryRequest, Packet )
// Exports
module.exports = QueryDirectoryRequest
