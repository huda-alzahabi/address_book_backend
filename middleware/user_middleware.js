function userMiddleware() {
  return (req, res, next) => {
    console.log(`- - ${req.query.id} - -`);

    next();
  };
}

module.exports = userMiddleware;
