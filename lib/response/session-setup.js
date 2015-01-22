var Message = require( '../message' )
var inherit = require( 'bloodline' )

/**
 * SessionSetup Constructor
 * @return {SessionSetup}
 */
function SessionSetup( options ) {
  
  if( !(this instanceof SessionSetup) )
    return new SessionSetup( options )
  
  Message.call( this )
  
  this.structureSize = 0x0009
  this.sessionFlags = 0x0000
  this.securityBufferOffset = 0x0000
  this.securityBufferLength = 0x0000
  this.buffer = new Buffer( 0 )
  
}

/**
 * SessionSetup Prototype
 * @type {Object}
 */
SessionSetup.prototype = {
  
  constructor: SessionSetup,
  
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

inherit( SessionSetup, Message )
// Exports
module.exports = SessionSetup
