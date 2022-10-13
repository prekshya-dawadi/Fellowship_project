var express = require('express');
var router = express.Router();

const todos = require('../Resource/todo');
const Todos = require('../models/Todos');


/* GET home page. */

router.get('/', async function(req, res, next) {
  // res.send('prekshya'); directly sends the text to the browser.
  const todos = await Todos.find(); //promises donot return values, they return state. await catches resolved state of async function
  console.log(todos);
  res.render('home', {todosList:todos});
});
router.get('/add', function(req, res, next){
  res.render('add', {title:"Add ToDo"});
});
router.post('/todoinfo', async function(req, res, next){
  //One way to do it: await Todos.insertMany([{title: req.body.title, description: req.body.description}]);
  //Another way
  const todo = new Todos({
    title: req.body.title, 
    description: req.body.description
  })

  await todo.save();

  //Another way to do this:
  // todo.save().then(()=>console.log('todo inserted')).catch(()=>console.log('error in todo insertion.'));


  // todos.push({...req.body, _id: `00${todos.length}`});
  res.redirect('/');
});


router.get('/delete-todo/:id', async function(req, res, next){
  // console.log(req.params.index);
  // todos.splice(req.params.index, 1);
  await Todos.remove({_id: req.params.id});
  res.redirect('/');
});

router.get('/open-update-form/:id', async function(req, res, next){
  const todotodo = await Todos.findOne({_id: req.params.id});
  res.render('editToDo',{todo: todotodo});
})

router.post('/edit/:id',async function(req, res, next){
  // const index = await Todos.findOne({_id: req.params.id});
  await Todos.updateOne({_id: req.params.id}, {$set: {title: req.body.title, description: req.body.description }});
  res.redirect('/');
})

module.exports = router;
