/**
 * SMB Global Capability Flags
 * @enum {UInt32}
 * @type {Object}
 */
module.exports = {
  // Indicates that the client supports
  // the Distributed File System (DFS)
  DFS: 0x00000001,
  // Indicates that the client supports
  // leasing
  LEASING: 0x00000002,
  // Indicates that the client supports
  // multi-credit operations
  LARGE_MTU: 0x00000004,
  // Indicates that the client supports
  // establishing multiple channels for a single session
  MULTI_CHANNEL: 0x00000008,
  // Indicates that the client supports
  // persistent handles
  PERSISTENT_HANDLES: 0x00000010,
  // Indicates that the client supports
  // directory leasing
  DIRECTORY_LEASING: 0x00000020,
  // Indicates that the client supports
  // encryption
  ENCRYPTION: 0x00000040,
}
