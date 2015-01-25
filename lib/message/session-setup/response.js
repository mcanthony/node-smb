var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * SessionSetupResponse Constructor
 * @return {SessionSetupResponse}
 */
function SessionSetupResponse( options ) {
  
  if( !(this instanceof SessionSetupResponse) )
    return new SessionSetupResponse( options )
  
  Packet.call( this )
  
  this.structureSize = 0x0009
  this.sessionFlags = 0x0000
  this.securityBufferOffset = 0x0000
  this.securityBufferLength = 0x0000
  this.buffer = new Buffer( 0 )
  
}

/**
 * SessionSetupResponse Prototype
 * @type {Object}
 */
SessionSetupResponse.prototype = {
  
  constructor: SessionSetupResponse,
  
  parsePayload: function( buffer ) {
    
    this.structureSize = buffer.readUInt16LE( 0 )
    this.sessionFlags = buffer.readUInt16LE( 2 )
    this.securityBufferOffset = buffer.readUInt16LE( 4 )
    this.securityBufferLength = buffer.readUInt16LE( 6 )
    this.buffer = buffer.slice(
      this.securityBufferOffset,
      this.securityBufferOffset + this.securityBufferLength
    )
    
    return this
    
  },
  
  serialize: function() {
    return buffer
  },
  
}

inherit( SessionSetupResponse, Packet )
// Exports
module.exports = SessionSetupResponse
