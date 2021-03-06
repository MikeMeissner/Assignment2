var express = require('express');
var passport = require('passport');
var router = express.Router();

var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    displayName: req.user ? req.user.displayName : ''
   });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About', 
    displayName: req.user ? req.user.displayName : ''
    });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { 
    title: 'Project',
    displayName: req.user ? req.user.displayName : ''
     });
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { 
    title: 'Service',
    displayName: req.user ? req.user.displayName : ''
     });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
      title: 'Contact',
      displayName: req.user ? req.user.displayName : ''
   });
});

/* Render Login page. */
router.get('/login', function (req, res, next) {
    if (!req.user) {
        res.render('login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/users');
    }
});

/* Process the Login Request */
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/contacts',
    failureRedirect: '/login',
    failureFlash: true
}));

/* Process Logout Request */
router.get('/logout', function (req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
 