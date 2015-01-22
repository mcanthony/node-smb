/**
 * SMB NEGOTIATE Flags
 * @enum {UInt16}
 * @type {Object}
 */
module.exports = {
  // When set, indicates that security signatures
  // are enabled on the client.
  // The client MUST set this bit if the
  // NEGOTIATE_SIGNING_REQUIRED bit is not set,
  // and MUST NOT set this bit if the NEGOTIATE_SIGNING_REQUIRED bit is set.
  // The server MUST ignore this bit.
  SIGNING_ENABLED: 0x0001,
  // When set, indicates that security signatures
  // are required by the client.
  SIGNING_REQUIRED: 0x0002,
}
