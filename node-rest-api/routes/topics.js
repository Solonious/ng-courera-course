var Topic = require('../models').topicModel;
var Article = require('../models').articleModel;

var validator = require('../lib/joi-validate');
var scalarSchema = require('../lib/scalar-schema');

module.exports = {
  getAllTopics: function(req, res) {

    Topic.getTopics(function(err, result) {
      res.send(result);
    });
  },

  getTopicById: function(req, res) {

    validator({id: req.params['topic_id']}, {id: scalarSchema.number}, function(err, value) {
      if (err) throw err;

      Topic.getTopic(value.id, function(err, result) {
        res.send(result[0]);
      })
    });
  },

  getCurrentTopicArticles: function(req, res) {

    validator({id: req.params['topic_id']}, {id: scalarSchema.number}, function(err, value) {
      if (err) throw err;

      Article.getArticlesByTopicId(value.id, function(err, result) {
        res.send(result[0]);
      })
    })
  }
};
