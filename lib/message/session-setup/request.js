var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * SessionSetupRequest Constructor
 * @return {SessionSetupRequest}
 */
function SessionSetupRequest( options ) {
  
  if( !(this instanceof SessionSetupRequest) )
    return new SessionSetupRequest( options )
  
  Packet.call( this )
  
  this.structureSize = 0x0019
  this.flags = 0x00
  this.securityMode = 0x00
  this.capabilities = 0x00000000
  this.channel = 0x00000000
  this.securityBufferOffset = 0x0000
  this.securityBufferLength = 0x0000
  this.previousSessionId = '0000000000000000'
  this.buffer = new Buffer( 0 )
  
}

/**
 * SessionSetupRequest Prototype
 * @type {Object}
 */
SessionSetupRequest.prototype = {
  
  constructor: SessionSetupRequest,
  
  parsePayload: function( buffer ) {
    
    this.structureSize = buffer.readUInt16LE( 0 )
    this.flags = buffer.readUInt8( 2 )
    this.securityMode = buffer.readUInt8( 3 )
    this.capabilities = buffer.readUInt32LE( 4 )
    this.channel = buffer.readUInt32LE( 8 )
    this.securityBufferOffset = buffer.readUInt16LE( 12 )
    this.securityBufferLength = buffer.readUInt16LE( 14 )
    this.previousSessionId = buffer.toString( 16, 24, 'hex' )
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

inherit( SessionSetupRequest, Packet )
// Exports
module.exports = SessionSetupRequest
