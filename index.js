const Keygrip = require("keygrip");

/**
 * Forge a cookie.
 *
 * @param {object} [options]
 * @param {array} [options.keys]
 * @param {string} [options.algorithm=sha1]
 * @param {string} [options.encoding=base64]
 * @param {string} [options.name=session] Name of the cookie to use
 * @public
 */
const forgeCookie = (payload, options) => {
  let opts = options || {};

  // defaults
  if (opts.algorithm == null) opts.algorithm = "sha1";
  if (opts.encoding == null) opts.encoding = "base64";
  if (opts.name == null) opts.name = "session";

  // Create a new keygrip
  const kg = new Keygrip(opts.keys, opts.algorithm, opts.encoding);

  // Base64 encode the payload
  const payload64 = Buffer.from(JSON.stringify(payload)).toString("base64");

  // Create a signature for the payload
  const signature = kg.sign(`${opts.name}=${payload64}`);

  // Return the base64 encoded payload and signature
  return {
    payload: payload64,
    signature: signature,
  };
};

module.exports = forgeCookie;
