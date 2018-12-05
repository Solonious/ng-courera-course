var Topic = require('../models').topicModel;

module.exports = {
  getAllTopics: function(req, res) {
    Topic.getTopics(function(err, result) {
      res.send(result);
    });
  },
  getTopicById: function(req, res) {
    Topic.getTopic(req.params['topic_id'], function(err, result) {
      res.send(result);
    })
  },
  getCurrentTopicArticles: function(topicId) {},
  getCurrentTopicArticle: function(topicId, articleId) {}
};
