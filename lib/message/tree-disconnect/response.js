var SMB = require( '../../smb' )
var Packet = require( '../../packet' )
var inherit = require( 'bloodline' )

/**
 * TreeDisconnectResponse Constructor
 * The TREE_DISCONNECT Response packet is sent by the server to
 * confirm that a TREE_DISCONNECT Request was successfully processed.
 * @return {TreeDisconnectResponse}
 */
function TreeDisconnectResponse( options ) {
  
  if( !(this instanceof TreeDisconnectResponse) )
    return new TreeDisconnectResponse( options )
  
  Packet.call( this )
  
  this.header.command = SMB.COMMAND.TREE_DISCONNECT
  
  this.structureSize = TreeDisconnectResponse.size
  this.reserved = 0x0000
  
}

/**
 * TreeDisconnectResponse structure size
 * @type {Number}
 */
TreeDisconnectResponse.size = 0x0004

/**
 * TreeDisconnectResponse Prototype
 * @type {Object}
 */
TreeDisconnectResponse.prototype = {
  
  constructor: TreeDisconnectResponse,
  
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

inherit( TreeDisconnectResponse, Packet )
// Exports
module.exports = TreeDisconnectResponse
