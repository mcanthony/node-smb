var SMB = exports
var log = require( 'debug' )( 'SMB' )

/**
 * SMB Default Port
 * @type {Number}
 */
SMB.PORT = 445

/**
 * Protocol identifier (in network order):
 * 0xFE, 'S', 'M', and 'B'
 * DECIMAL: 1112364030
 * HEX: 0x424D53FE
 * @type {Number}
 */
SMB.MAGIC = new Buffer( '\xFESMB', 'ascii' )
  .readUInt32LE( 0 )

/**
 * Ports on which SMB typically operates
 * @type {Array}
 */
SMB.ports = [
  // Direct
  { port: 445, protocol: 'tcp' },
  // NetBIOS
  { port: 137, protocol: 'udp' },
  { port: 138, protocol: 'udp' },
  { port: 137, protocol: 'tcp' },
  { port: 139, protocol: 'tcp' },
]

/**
 * SMB Dialect (Protocol Version) Numbers & Values
 * @enum {UInt16}
 * @type {Object}
 */
SMB.DIALECT = {
  '2.002': 0x0202,
  '2.1':   0x0210,
  '3.0':   0x0300,
  '3.02':  0x0302,
}

// Message Command Types
SMB.COMMAND = require( './enum/command' )
// Message Header Flags
SMB.MESSAGE = require( './enum/message' )
// Negotiate Flags
SMB.NEGOTIATE = require( './enum/negotiate' )
// Global Capability Flags
SMB.CAPABILITY = require( './enum/capability' )
// Session Flags
SMB.SESSION = require( './enum/session' )
// Share Flags
SMB.SHARE = require( './enum/share' )
// Share Type Flags
SMB.SHARE_TYPE = require( './enum/share-type' )
// Share Capability Flags
SMB.SHARE_CAPABILITY = require( './enum/share-capability' )

/**
 * SMB Message Constructor
 * @type {Function}
 */
SMB.Message = require( './message' )

SMB.Request = {
  Negotiate: require( './request/negotiate' ),
}

SMB.Response = {
  Negotiate: require( './response/negotiate' ),
}
