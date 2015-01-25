var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * SetInfoResponse Constructor
 * @return {SetInfoResponse}
 */
function SetInfoResponse( options ) {
  
  if( !(this instanceof SetInfoResponse) )
    return new SetInfoResponse( options )
  
  Packet.call( this )
  
}

/**
 * SetInfoResponse Prototype
 * @type {Object}
 */
SetInfoResponse.prototype = {
  
  constructor: SetInfoResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( SetInfoResponse, Packet )
// Exports
module.exports = SetInfoResponse
