var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * LeaseBreakResponse Constructor
 * @return {LeaseBreakResponse}
 */
function LeaseBreakResponse( options ) {
  
  if( !(this instanceof LeaseBreakResponse) )
    return new LeaseBreakResponse( options )
  
  Packet.call( this )
  
}

/**
 * LeaseBreakResponse Prototype
 * @type {Object}
 */
LeaseBreakResponse.prototype = {
  
  constructor: LeaseBreakResponse,
  
  parsePayload: function( buffer ) {
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( LeaseBreakResponse, Packet )
// Exports
module.exports = LeaseBreakResponse
