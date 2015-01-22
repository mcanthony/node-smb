/**
 * SMB Message Header Flags
 * @enum {UInt32}
 * @type {Object}
 */
module.exports = {
  // Indicates the message is a response rather than a request.
  // This MUST be set on responses sent from the server to the client,
  // and MUST NOT be set on requests sent from the client to the server.
  SERVER_TO_REDIR: 0x00000001,
  // Indicates that this is an ASYNC SMB2 header.
  // NOTE: This header format MAY be used for any request,
  // and the SMB2 CANCEL Request MUST use this format for
  // canceling requests that have received an interim response
  // NOTE: If the SMB2_FLAGS_ASYNC_COMMAND bit is not set in Flags,
  // the header takes the form SMB2 Packet Header – SYNC
  ASYNC_COMMAND: 0x00000002,
  // When set in an SMB2 request, indicates that this request is a
  // related operation in a compounded request chain.
  // When set in an SMB2 compound response, indicates that the
  // request corresponding to this response was part of a related
  // operation in a compounded request chain.
  RELATED_OPERATIONS: 0x00000004,
  // Indicates that this packet has been signed.
  SIGNED: 0x00000008,
  // Indicates that this command is a Distributed File System (DFS) operation.
  DFS_OPERATIONS: 0x10000000,
  // This flag is only valid for the SMB 3.x dialect family.
  // When set, it indicates that this command is a replay operation.
  // NOTE: The client MUST ignore this bit on receipt.
  REPLAY_OPERATION: 0x20000000,
}
