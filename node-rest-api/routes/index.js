var express = require('express');
var router = express.Router();
var Users = require('./users');
var Topics = require('./topics');
var Articles = require('./articles');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  next();
});

// USER
router.get('/user/:user_id', Users.getUser);

//TOPIC
router.get('/topics', Topics.getAllTopics);
router.get('/topic/:topic_id', Topics.getTopicById);
router.get('/topic/:topic_id/articles', Topics.getCurrentTopicArticles);

//ARTICLE
router.get('/articles', Articles.getAllArticles);
router.get('/article/:article_id', Articles.getArticle);

module.exports = router;
