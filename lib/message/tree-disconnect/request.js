var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * TreeDisconnectRequest Constructor
 * The TREE_DISCONNECT Request packet is sent by the client
 * to request that the tree connect that is specified in
 * the 'TreeId' within the SMB header be disconnected.
 * @return {TreeDisconnectRequest}
 */
function TreeDisconnectRequest( options ) {
  
  if( !(this instanceof TreeDisconnectRequest) )
    return new TreeDisconnectRequest( options )
  
  Packet.call( this )
  
  this.header.command = SMB.COMMAND.TREE_DISCONNECT
  
  this.structureSize = TreeDisconnectRequest.size
  this.reserved = 0x0000
  
}

/**
 * TreeDisconnectRequest structure size
 * @type {Number}
 */
TreeDisconnectRequest.size = 0x0004

/**
 * TreeDisconnectRequest Prototype
 * @type {Object}
 */
TreeDisconnectRequest.prototype = {
  
  constructor: TreeDisconnectRequest,
  
  parsePayload: function( buffer ) {
    
    this.structureSize = buffer.readUInt16LE( 0 )
    this.reserved = buffer.readUInt16LE( 2 )
    
    return this
    
  },
  
  serialize: function() {
    
    var buffer = new Buffer( this.structureSize )
    buffer.fill( 0 )
    
    buffer.writeUInt16LE( this.structureSize, 0 )
    buffer.writeUInt16LE( this.reserved, 2 )
    
    return buffer
    
  },
  
}

inherit( TreeDisconnectRequest, Packet )
// Exports
module.exports = TreeDisconnectRequest
