const userDataController = {};

userDataController.createApp = (req, res, next) => {
  const body = req.body;
  console.log('got post request');
  console.log(body);
  return next();
};

module.exports = userDataController;
