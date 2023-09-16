const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in." });
  }

  const token = authorization.split(" ")[1];
  try {
    jwt.verify(token, process.env.ACCESSTOKEN);
    next();

  } catch (e) {
    console.log(e);
    return res.status(401).json({ error: `${e}` });
  }
};

module.exports = requireAuth;