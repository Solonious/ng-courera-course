const connection = require('./db');

module.exports = {
  getTopics: function(cb) {
    connection.query('SELECT * FROM `Topic`;', cb);
  },
  getTopic: function(topicId, cb) {
    connection.query('SELECT * FROM `Topic` WHERE `id`=' + topicId + ';', cb)
  }
};
