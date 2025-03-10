var convict = require("convict");

// Configuration schema
var config = convict({
  http: {
    doc: "Enable HTTP server.",
    format: Boolean,
    default: true,
    env: "HTTP"
  },
  udp: {
    doc: "Enable UDP server.",
    format: Boolean,
    default: false,
    env: "UDP"
  },
  websocket: {
    doc: "Enable websocket server.",
    format: Boolean,
    default: true,
    env: "WEBSOCKET"
  },
  torrentWhitelist: {
    doc:
      "List of allowed info hashes. If this option is omitted, all torrents are allowed.",
    format: Array,
    default: false,
    env: "TORRENT_WHITELIST"
  },
  stats: {
    doc: "Provide tracker statistics via web interface at /stats.",
    format: Boolean,
    default: true,
    env: "STATS"
  },
  trustProxy: {
    doc: "Trust x-forwarded-for header from reverse proxy",
    format: Boolean,
    default: true,
    env: "TRUST_PROXY"
  }
});

// Perform validation
config.validate({ allowed: "strict" });

module.exports = config;
