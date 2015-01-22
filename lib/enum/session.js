/**
 * SMB SESSION Flags
 * @type {Object}
 */
module.exports = {
  // REQUEST FLAGS
  // When set, indicates that the request is
  // to bind an existing session to a new connection.
  REQUEST_BINDING: 0x01,
  // RESPONSE FLAGS
  // If set, the client has been authenticated as a guest user.
  IS_GUEST: 0x0001,
  // If set, the client has been authenticated as an anonymous user.
  IS_NULL: 0x0002,
  // If set, the server requires encryption of messages on this session.
  // This flag is only valid for the SMB 3.x dialect family.
  ENCRYPT_DATA: 0x0004,
}
