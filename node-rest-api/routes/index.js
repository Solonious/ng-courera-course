var express = require('express');
var router = express.Router();
var Users = require('./users');
var Topics = require('./topics');

var connection = require('../models/db');

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
router.get('topic/:topic_id/articles', Topics.getCurrentTopicArticles);
router.get('topic/:topic_id/articles/:article_id', Topics.getCurrentTopicArticle);

//ARTICLE
router.get('/articles');
router.get('/article/:article_id');

module.exports = router;
