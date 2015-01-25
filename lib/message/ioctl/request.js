var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * IoctlRequest Constructor
 * @return {IoctlRequest}
 */
function IoctlRequest( options ) {
  
  if( !(this instanceof IoctlRequest) )
    return new IoctlRequest( options )
  
  Packet.call( this )
  
}

/**
 * IoctlRequest Prototype
 * @type {Object}
 */
 IoctlRequest.prototype = {
  
  constructor: IoctlRequest,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( IoctlRequest, Packet )
// Exports
module.exports = IoctlRequest
