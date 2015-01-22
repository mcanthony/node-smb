/**
 * SMB SHARE Flags
 * @enum {UInt32}
 * @type {Object}
 */
module.exports = {
  // The client may cache files that are explicitly
  // selected by the user for offline use.
  MANUAL_CACHING: 0x00000000,
  // The client may automatically cache files that are
  // used by the user for offline access.
  AUTO_CACHING: 0x00000010,
  // The client may automatically cache files that are used
  // by the user for offline access and may use those files
  // in an offline mode even if the share is available.
  VDO_CACHING: 0x00000020,
  // Offline caching MUST NOT occur.
  NO_CACHING: 0x00000030,
  // The specified share is present in a
  // Distributed File System (DFS) tree structure.
  // The server SHOULD set the DFS bit in the ShareFlags field
  // if the per-share property Share.IsDfs is TRUE.
  DFS: 0x00000001,
  // The specified share is present in a DFS tree structure.
  // The server SHOULD set the DFS_ROOT bit in the ShareFlags field
  // if the per-share property Share.IsDfs is TRUE.
  DFS_ROOT: 0x00000002,
  // The specified share disallows exclusive file opens
  // that deny reads to an open file.
  RESTRICT_EXCLUSIVE_OPENS: 0x00000100,
  // The specified share disallows clients from opening files on
  // the share in an exclusive mode that prevents the file from
  // being deleted until the client closes the file.
  FORCE_SHARED_DELETE: 0x00000200,
  // The client MUST ignore this flag.
  ALLOW_NAMESPACE_CACHING: 0x00000400,
  // The server will filter directory entries based on
  // the access permissions of the client.
  ACCESS_BASED_DIRECTORY_ENUM: 0x00000800,
  // The server will not issue exclusive caching rights on this share.
  FORCE_LEVELII_OPLOCK: 0x00001000,
  // The share supports hash generation for branch cache retrieval of data.
  // NOTE: This flag is not valid for the SMB 2.002 dialect.
  ENABLE_HASH_V1: 0x00002000,
  // The share supports v2 hash generation for branch cache retrieval of data.
  // NOTE: This flag is not valid for the SMB 2.002 and SMB 2.1 dialects.
  ENABLE_HASH_V2: 0x00004000,
  // The server requires encryption of remote file access messages on this share.
  // NOTE: This flag is only valid for the SMB 3.x dialect family.
  ENCRYPT_DATA: 0x00008000,
}
