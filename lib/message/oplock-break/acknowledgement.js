var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * OplockBreakAck Constructor
 * @return {OplockBreakAck}
 */
function OplockBreakAck( options ) {
  
  if( !(this instanceof OplockBreakAck) )
    return new OplockBreakAck( options )
  
  Packet.call( this )
  
}

/**
 * OplockBreakAck Prototype
 * @type {Object}
 */
OplockBreakAck.prototype = {
  
  constructor: OplockBreakAck,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( OplockBreakAck, Packet )
// Exports
module.exports = OplockBreakAck
