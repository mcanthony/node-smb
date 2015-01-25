var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * OplockBreakNotification Constructor
 * @return {OplockBreakNotification}
 */
function OplockBreakNotification( options ) {
  
  if( !(this instanceof OplockBreakNotification) )
    return new OplockBreakNotification( options )
  
  Packet.call( this )
  
}

/**
 * OplockBreakNotification Prototype
 * @type {Object}
 */
OplockBreakNotification.prototype = {
  
  constructor: OplockBreakNotification,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( OplockBreakNotification, Packet )
// Exports
module.exports = OplockBreakNotification
