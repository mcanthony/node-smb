var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * LogoffRequest Constructor
 * @return {LogoffRequest}
 */
function LogoffRequest( options ) {
  
  if( !(this instanceof LogoffRequest) )
    return new LogoffRequest( options )
  
  Packet.call( this )
  
}

/**
 * LogoffRequest Prototype
 * @type {Object}
 */
LogoffRequest.prototype = {
  
  constructor: LogoffRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( LogoffRequest, Packet )
// Exports
module.exports = LogoffRequest
