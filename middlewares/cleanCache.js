const { clearHash } = require("../services/cache");

module.exports = async (req, res, next) => {
  await next();

  console.log("CLEAR HASH");
  clearHash(req.user.id);
};
