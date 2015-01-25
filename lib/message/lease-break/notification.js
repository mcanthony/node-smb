var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * LeaseBreakNotification Constructor
 * @return {LeaseBreakNotification}
 */
function LeaseBreakNotification( options ) {
  
  if( !(this instanceof LeaseBreakNotification) )
    return new LeaseBreakNotification( options )
  
  Packet.call( this )
  
}

/**
 * LeaseBreakNotification Prototype
 * @type {Object}
 */
LeaseBreakNotification.prototype = {
  
  constructor: LeaseBreakNotification,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( LeaseBreakNotification, Packet )
// Exports
module.exports = LeaseBreakNotification
