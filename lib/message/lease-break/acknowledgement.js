var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * LeaseBreakAck Constructor
 * @return {LeaseBreakAck}
 */
function LeaseBreakAck( options ) {
  
  if( !(this instanceof LeaseBreakAck) )
    return new LeaseBreakAck( options )
  
  Packet.call( this )
  
}

/**
 * LeaseBreakAck Prototype
 * @type {Object}
 */
LeaseBreakAck.prototype = {
  
  constructor: LeaseBreakAck,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( LeaseBreakAck, Packet )
// Exports
module.exports = LeaseBreakAck
