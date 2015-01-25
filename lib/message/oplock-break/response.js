var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * OplockBreakResponse Constructor
 * @return {OplockBreakResponse}
 */
function OplockBreakResponse( options ) {
  
  if( !(this instanceof OplockBreakResponse) )
    return new OplockBreakResponse( options )
  
  Packet.call( this )
  
}

/**
 * OplockBreakResponse Prototype
 * @type {Object}
 */
OplockBreakResponse.prototype = {
  
  constructor: OplockBreakResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( OplockBreakResponse, Packet )
// Exports
module.exports = OplockBreakResponse
