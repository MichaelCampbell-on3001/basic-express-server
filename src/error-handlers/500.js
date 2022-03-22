'use strcit';
function throwError (err, req, res, next) {
  res.status(err.status).send(err.message);
}

module.exports = throwError;