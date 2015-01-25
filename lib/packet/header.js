var SMB = require( '../smb' )

/**
 * SMB Message Header Constructor
 * @return {Header}
 */
function Header( options ) {
  
  if( !(this instanceof Header) )
    return new Header( options )
  
  // ProtocolId (4 bytes): The protocol identifier.
  // The value MUST be (in network order) 0xFE, 'S', 'M', and 'B'.
  this.protocolId = SMB.MAGIC
  // StructureSize (2 bytes): MUST be set to 64,
  // which is the size, in bytes, of the SMB2 header structure.
  this.structureSize = 0x0040
  // CreditCharge (2 bytes): In the SMB 2.002 dialect,
  // this field MUST NOT be used and MUST be reserved.
  // The sender MUST set this to 0, and the receiver MUST ignore it.
  // In all other dialects, this field indicates the
  // number of credits that this request consumes.
  this.creditCharge = 0x0000
  // (ChannelSequence/Reserved)/Status (4 bytes): In a request,
  // this field is interpreted in different ways depending on the SMB2 dialect.
  // In the SMB 3.x dialect family, this field is interpreted as the
  // ChannelSequence field followed by the Reserved field in a request.
  this.status = 0x00000000
  // ChannelSequence (2 bytes): This field is an indication
  // to the server about the client's Channel change.
  this.channelSequence = 0x0000
  // Command (2 bytes): The command code of this packet.
  this.command = 0x0000
  // CreditRequest/CreditResponse (2 bytes): On a request,
  // this field indicates the number of credits the client is requesting.
  // On a response, it indicates the number of credits granted to the client.
  this.credit = 0x0000
  // Flags (4 bytes): A flags field,
  // which indicates how to process the operation.
  this.flags = 0x00000000
  // NextCommand (4 bytes): For a compounded request,
  // this field MUST be set to the offset, in bytes,
  // from the beginning of this SMB2 header to the
  // start of the subsequent 8-byte aligned SMB2 header.
  // NOTE: If this is not a compounded request,
  // or this is the last header in a compounded request,
  // this value MUST be 0.
  this.nextCommand = 0x00000000
  // MessageId (8 bytes): A value that identifies a message
  // request and response uniquely across all messages that
  // are sent on the same SMB 2 Protocol transport connection.
  this.messageId = '0000000000000000'
  
  // NOTE: ASYNC_ID ONLY IN ASYNC PACKETS
  // AsyncId (8 bytes): A unique identification number that
  // is created by the server to handle operations asynchronously
  this.asyncId = null // '0000000000000000'
  
  // NOTE: TREE_ID ONLY IN SYNC PACKETS
  // Reserved (4 bytes): The client SHOULD set this field to 0.
  // The server MAY ignore this field on receipt.
  this.reserved = 0x00000000
  // TreeId (4 bytes): Uniquely identifies the tree connect for the command.
  // This MUST be 0 for the SMB2 TREE_CONNECT Request.
  // The TreeId can be any unsigned 32-bit integer that is
  // received from a previous SMB2 TREE_CONNECT Response.
  // The following SMB 2 Protocol commands do not require
  // the TreeId to be set to a nonzero value received
  // from a previous SMB2 TREE_CONNECT Response.
  // TreeId SHOULD be set to 0 for the following commands:
  // NEGOTIATE, SESSION_SETUP, LOGOFF, ECHO, CANCEL (Request only)
  this.treeId = null // 0x00000000
  
  // SessionId (8 bytes): Uniquely identifies the
  // established session for the command.
  // This MUST be 0 for requests that do not have an associated user context.
  // This MUST be 0 for the first SESSION_SETUP Request for a specified security principal.
  // The following SMB 2 Protocol commands do not require the SessionId
  // to be set to a nonzero value received from a previous SESSION_SETUP Response.
  // The client MUST set the SessionId to 0, and the server
  // SHOULD ignore this value for the following commands:
  // NEGOTIATE (Request & Response)
  this.sessionId = '0000000000000000'
  // Signature (16 bytes): The 16-byte signature of the message,
  // if SIGNED is set in the Flags field of the SMB2 header.
  // If the message is not signed, this field MUST be 0.
  this.signature = '0000000000000000'
  
  if( options != null ) {
    this.set( options )
  }
  
}

/**
 * SMB Message Header Prototype
 * @type {Object}
 */
Header.prototype = {
  
  constructor: Header,
  
  set: function( options ) {
    var k, keys = Object.keys( this )
    for( var i = 0; i < keys.length; i++ ) {
      k = keys[ i ]
      this[ k ] = options[ k ] != null ?
        options[ k ] : this[ k ]
    }
  },
  
  parse: function( buffer ) {
    
    this.protocolId = buffer.readUInt32LE( 0 )
    this.structureSize = buffer.readUInt16LE( 4 )
    this.creditCharge = buffer.readUInt16LE( 6 )
    this.status = buffer.readUInt32LE( 8 )
    this.channelSequence = buffer.readUInt16LE( 8 )
    this.command = buffer.readUInt16LE( 12 )
    this.credit = buffer.readUInt16LE( 14 )
    this.flags = buffer.readUInt32LE( 16 )
    this.nextCommand = buffer.readUInt32LE( 20 )
    this.messageId = buffer.toString( 24, 32, 'hex' )
    
    if( this.flags & SMB.ASYNC_COMMAND ) {
      this.asyncId = buffer.toString( 32, 40, 'hex' )
    } else {
      // this.reserved = 0x00000000
      this.treeId = buffer.readUInt32LE( 36 )
    }
    
    this.sessionId = buffer.toString( 40, 48, 'hex' )
    this.signature = buffer.toString( 48, 64, 'hex' )
    
    return this
    
  },
  
  toBuffer: function() {
    
    var buffer = new Buffer( this.structureSize )
    
    throw new Error( 'Not implemented' )
    
    return buffer
    
  }
  
}

// Exports
module.exports = Header
