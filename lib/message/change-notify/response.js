var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * ChangeNotifyResponse Constructor
 * @return {ChangeNotifyResponse}
 */
function ChangeNotifyResponse( options ) {
  
  if( !(this instanceof ChangeNotifyResponse) )
    return new ChangeNotifyResponse( options )
  
  Packet.call( this )
  
}

/**
 * ChangeNotifyResponse Prototype
 * @type {Object}
 */
ChangeNotifyResponse.prototype = {
  
  constructor: ChangeNotifyResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( ChangeNotifyResponse, Packet )
// Exports
module.exports = ChangeNotifyResponse
