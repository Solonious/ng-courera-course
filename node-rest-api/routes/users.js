var models = require('../models');

module.exports = {
  saveUser: function(req, res, next) {

  },
  getUser: function(req, res, next) {
    res.send(req.params);
    // user.getUser();
  }
};

