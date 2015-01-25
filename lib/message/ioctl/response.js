var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * IoctlResponse Constructor
 * @return {IoctlResponse}
 */
function IoctlResponse( options ) {
  
  if( !(this instanceof IoctlResponse) )
    return new IoctlResponse( options )
  
  Packet.call( this )
  
}

/**
 * IoctlResponse Prototype
 * @type {Object}
 */
 IoctlResponse.prototype = {
  
  constructor: IoctlResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( IoctlResponse, Packet )
// Exports
module.exports = IoctlResponse
