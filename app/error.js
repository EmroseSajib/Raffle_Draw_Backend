const notFoundHandler = (_req, _res, next) => {
  const error = new Error('Resource Not Found');
  error.status = 404;
  next(error);
};

const errorHandler = (error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  next();
  // res.status(500).json({ message: 'something went wrong' });
};

module.exports = { notFoundHandler, errorHandler };
