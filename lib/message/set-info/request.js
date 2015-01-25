var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * SetInfoRequest Constructor
 * @return {SetInfoRequest}
 */
function SetInfoRequest( options ) {
  
  if( !(this instanceof SetInfoRequest) )
    return new SetInfoRequest( options )
  
  Packet.call( this )
  
}

/**
 * SetInfoRequest Prototype
 * @type {Object}
 */
SetInfoRequest.prototype = {
  
  constructor: SetInfoRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( SetInfoRequest, Packet )
// Exports
module.exports = SetInfoRequest
