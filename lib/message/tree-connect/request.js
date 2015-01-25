var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * TreeConnectRequest Constructor
 * The TREE_CONNECT Request packet is sent by a client to
 * request access to a particular share on the server.
 * @return {TreeConnectRequest}
 */
function TreeConnectRequest( options ) {
  
  if( !(this instanceof TreeConnectRequest) )
    return new TreeConnectRequest( options )
  
  Packet.call( this )
  
  this.header.command = SMB.COMMAND.TREE_CONNECT
  
  this.structureSize = TreeConnectRequest.size
  this.reserved = 0x0000
  this.pathOffset = 0x0000
  this.pathLength = 0x0000
  this.buffer = new Buffer( 0 )
  
}

/**
 * TREE_CONNECT Request structure size
 * @type {Number}
 */
TreeConnectRequest.size = 0x0009

/**
 * TreeConnectRequest Prototype
 * @type {Object}
 */
TreeConnectRequest.prototype = {
  
  constructor: TreeConnectRequest,
  
  parsePayload: function( buffer ) {
    
    this.structureSize = buffer.readUInt16LE( 0 )
    this.reserved = buffer.readUInt16LE( 2 )
    this.pathOffset = buffer.readUInt16LE( 4 )
    this.pathLength = buffer.readUInt16LE( 6 )
    
    var offset = this.pathOffset - this.header.structureSize
    
    this.buffer = buffer.slice( offset, offset + this.pathLength )
    
    return this
    
  },
  
  serialize: function() {
    
    var offset = this.pathOffset - this.header.structureSize
    var size = this.structureSize + this.offset + this.pathLength
    var buffer = new Buffer( size )
    buffer.fill( 0 )
    
    buffer.writeUInt16LE( this.structureSize, 0 )
    buffer.writeUInt16LE( this.reserved, 2 )
    buffer.writeUInt16LE( this.pathOffset, 2 )
    buffer.writeUInt16LE( this.pathLength, 2 )
    
    this.buffer.copy( buffer, offset )
    
    return buffer
    
  },
  
}

inherit( TreeConnectRequest, Packet )
// Exports
module.exports = TreeConnectRequest
