'use strict';

var Joi = require('joi');

module.exports = function(obj, schema) {
  Joi.validate(obj, schema, function(err, value) {
    return {
      err,
      value
    }
  });
};
