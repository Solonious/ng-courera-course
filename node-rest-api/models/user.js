const connection = require('./db').promise;

module.exports = {
  getUser: function(userId) {
    connection.query('SELECT * FROM `User` WHERE `id`= ' + userId + ';');
  },

  postUser: function(data) {}

};
