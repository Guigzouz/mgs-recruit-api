const jwt = require("jsonwebtoken");

module.exports = {
  /**
   * Signs a JWT with the given payload and options.
   * @param {Object} payload - The payload to include in the token.
   * @param {String} secret - The secret key for signing the token.
   * @param {Object} options - Additional options for the token (e.g., expiresIn).
   * @returns {String} - The signed JWT.
   */

  signJwt: (payload, secret, options = {}) => {
    try {
      return jwt.sign(payload, secret, options);
    } catch (error) {
      console.error("Error signing JWT:", error);
      throw new Error("JWT signing failed");
    }
  },
};
