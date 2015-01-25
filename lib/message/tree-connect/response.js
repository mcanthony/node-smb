var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * TreeConnectResponse Constructor
 * The TREE_CONNECT Response packet is sent by the server
 * when a TREE_CONNECT request is processed successfully by the server.
 * The server MUST set the 'TreeId' of the newly created tree connect
 * in the SMB Protocol header of the response.
 * @return {TreeConnectResponse}
 */
function TreeConnectResponse( options ) {
  
  if( !(this instanceof TreeConnectResponse) )
    return new TreeConnectResponse( options )
  
  Packet.call( this )
  
  this.header.command = SMB.COMMAND.TREE_CONNECT
  
  this.structureSize = TreeConnectResponse.size
  this.shareType = 0x00
  this.reserved = 0x00
  this.shareFlags = 0x00000000
  this.capabilities = 0x00000000
  this.maximalAccess = 0x00000000
  
}

/**
 * TREE_CONNECT Response structure size
 * @type {Number}
 */
TreeConnectResponse.size = 0x0010

/**
 * TreeConnectResponse Prototype
 * @type {Object}
 */
TreeConnectResponse.prototype = {
  
  constructor: TreeConnectResponse,
  
  parsePayload: function( buffer ) {
    
    this.structureSize = buffer.readUInt16LE( 0 )
    this.shareType = buffer.readUInt8( 2 )
    this.reserved = buffer.readUInt8( 3 )
    this.shareFlags = buffer.readUInt32LE( 4 )
    this.capabilities = buffer.readUInt32LE( 8 )
    this.maximalAccess = buffer.readUInt32LE( 12 )
    
    return this
    
  },
  
  serialize: function() {
    
    var buffer = new Buffer( this.structureSize )
    buffer.fill( 0 )
    
    buffer.writeUInt16LE( this.structureSize, 0 )
    buffer.writeUInt8( this.shareType, 2 )
    buffer.writeUInt8( this.reserved, 3 )
    buffer.writeUInt32LE( this.shareFlags, 4 )
    buffer.writeUInt32LE( this.capabilities, 8 )
    buffer.writeUInt32LE( this.maximalAccess, 12 )
    
    return buffer
    
  },
  
}

inherit( TreeConnectResponse, Packet )
// Exports
module.exports = TreeConnectResponse
