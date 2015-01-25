var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * ChangeNotifyRequest Constructor
 * @return {ChangeNotifyRequest}
 */
function ChangeNotifyRequest( options ) {
  
  if( !(this instanceof ChangeNotifyRequest) )
    return new ChangeNotifyRequest( options )
  
  Packet.call( this )
  
}

/**
 * ChangeNotifyRequest Prototype
 * @type {Object}
 */
ChangeNotifyRequest.prototype = {
  
  constructor: ChangeNotifyRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( ChangeNotifyRequest, Packet )
// Exports
module.exports = ChangeNotifyRequest
