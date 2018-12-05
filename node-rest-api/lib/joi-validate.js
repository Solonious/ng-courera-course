'use strict';

var Joi = require('joi');

module.exports = function(obj, schema, cb) {
  Joi.validate(obj, schema, cb);
};
