/**
 * SMB Share Capability
 * @enum {UInt32}
 * @type {Object}
 */
module.exports = {
  // The specified share is present in a DFS tree structure.
  // The server MUST set the CAP_DFS bit in the Capabilities field,
  // if the per-share property Share.IsDfs is TRUE.
  DFS: 0x00000008,
  // The specified share is continuously available.
  // NOTE: This flag is only valid for the SMB 3.x dialect family.
  CONTINUOUS: 0x00000010,
  // The specified share is present on a server configuration which
  // facilitates faster recovery of durable handles.
  // NOTE: This flag is only valid for the SMB 3.x dialect family.
  SCALEOUT: 0x00000020,
  // The specified share is present on a server configuration which
  // provides monitoring of the availability of share through
  // the Witness service specified in [MS-SWN].
  // NOTE: This flag is only valid for the SMB 3.x dialect family.
  CLUSTER: 0x00000040,
  // The specified share is present on a server configuration that
  // allows dynamic changes in the ownership of the share.
  // NOTE: This flag is only valid for the SMB 3.02 dialect.
  ASYMMETRIC: 0x00000080,
}
