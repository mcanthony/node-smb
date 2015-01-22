/**
 * SMB Message Commands
 * @enum {UInt16}
 * @type {Object}
 */
module.exports = {
  // Protocol negotiation
  NEGOTIATE: 0x0000,
  // User authentication
  SESSION_SETUP: 0x0001,
  LOGOFF: 0x0002,
  // Share access
  TREE_CONNECT: 0x0003,
  TREE_DISCONNECT: 0x0004,
  // File access
  CREATE: 0x0005,
  CLOSE: 0x0006,
  FLUSH: 0x0007,
  READ: 0x0008,
  WRITE: 0x0009,
  LOCK: 0x000A,
  IOCTL: 0x000B,
  CANCEL: 0x000C,
  // Simple messaging
  ECHO: 0x000D,
  // Directory access
  QUERY_DIRECTORY: 0x000E,
  CHANGE_NOTIFY: 0x000F,
  // Volume access
  QUERY_INFO: 0x0010,
  SET_INFO: 0x0011,
  // Cache coherency
  OPLOCK_BREAK: 0x0012,
}
