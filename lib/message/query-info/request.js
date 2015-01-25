var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * QueryInfoRequest Constructor
 * @return {QueryInfoRequest}
 */
function QueryInfoRequest( options ) {
  
  if( !(this instanceof QueryInfoRequest) )
    return new QueryInfoRequest( options )
  
  Packet.call( this )
  
}

/**
 * QueryInfoRequest Prototype
 * @type {Object}
 */
QueryInfoRequest.prototype = {
  
  constructor: QueryInfoRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( QueryInfoRequest, Packet )
// Exports
module.exports = QueryInfoRequest
