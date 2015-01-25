var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * LogoffResponse Constructor
 * @return {LogoffResponse}
 */
function LogoffResponse( options ) {
  
  if( !(this instanceof LogoffResponse) )
    return new LogoffResponse( options )
  
  Packet.call( this )
  
}

/**
 * LogoffResponse Prototype
 * @type {Object}
 */
LogoffResponse.prototype = {
  
  constructor: LogoffResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( LogoffResponse, Packet )
// Exports
module.exports = LogoffResponse
