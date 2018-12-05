var Article = require('../models').articleModel;

var validator = require('../lib/joi-validate');
var scalarSchema = require('../lib/scalar-schema');

module.exports = {
  getAllArticles: function(req, res) {

    Article.getArticles(function(err, result) {
      res.send(result);
    })
  },
  getArticle: function(req, res) {

    validator({id: req.params['article_id']}, {id: scalarSchema.number}, function(err, value) {
      if (err) throw err;

      Article.getArticle(value.id, function(err, result) {
        res.send(result[0]);
      })
    });
  }
};
