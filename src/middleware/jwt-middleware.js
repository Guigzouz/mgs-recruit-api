const jwt = require("jsonwebtoken");

/**
 * Verifies the access token from the request headers.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */

const verifyAccessToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      console.log("Authorization header missing");
      return res.status(401).json({ message: "Unauthorized" });
    }

    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        console.log("JWT verification failed:", err.message, payload);
        return res.status(401).json({ message: "Unauthorized" });
      }

      console.log("Decoded Payload:", payload); // Debugging payload
      req.payload = payload; // Attach the decoded payload to `req`
      next(); // Proceed to the next middleware/controller
    });
  } catch (error) {
    console.error("Error in verifyAccessToken middleware:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { verifyAccessToken };
