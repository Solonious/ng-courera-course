const connection = require('./db');

module.exports = {
  getArticles: function(cb) {
    connection.query('SELECT * FROM `Article`;', cb);
  },
  getArticle: function(id, cb) {
    connection.query('SELECT * FROM `Article` WHERE `id`=' + id + ';', cb)
  },
  getArticlesByTopicId: function (id, cb) {
    connection.query('SELECT * FROM `Article` WHERE `topic_id`=' + id + ';', cb)
  }
};
