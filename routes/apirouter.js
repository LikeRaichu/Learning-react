var express = require('express');
var router = express.Router();
var Users = require('../schemas/user');
var Comments = require('../schemas/comment');

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.send('api router');
});

router.get('/users', (req, res, next) => {
    Users.find({}, (err, result) => {
        if(err) console.log(err);
        else {
          console.log(result);
          res.json(result);
        }
      })
})

router.post('/users', (req, res, next) => {
    const user = new Users({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
      });
      user.save((err, result) => {
        if(err) console.log(err);
        else {
          console.log(result);
          res.status(201).json(result);
        }
      })
})


router.get('/comments/:id', function (req, res, next) {
    // Comments.find({commenter: req.params.id}, (err, result) => {
    //   if (err) console.log(err);
    //   else {
       
    //     console.log(result);
    //     res.json(result);
    //   }
    // })

    // Comments.find({ commenter: req.params.id}).populate('commenter')
    // .then((comments) => {
    //     console.log(comments);
    //     res.json(comments);
    // })
    // .catch((err) => {
    //     console.error(err);
    //     next(err);
    // });

    Comments.find({commenter: req.params.id}).populate('commenter').exec((err, results) => {
      if(err) console.log(err);
      else {
        console.log(results);
        res.json(results);
      }
    })
   
});

router.post('/comments', function (req, res, next) {
console.log(req.body);

    const comment = new Comments({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    comment.save((err, result) => {
      if(err) console.log(err);
      else {
        console.log(result);
        res.status(201).json(result);
      }
    });
  });

module.exports = router;
