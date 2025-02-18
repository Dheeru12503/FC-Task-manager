const express = require("express");
const router = express.Router();


// import controller 
const {createTodo} = require('../controller/createTodo');
const {getTodo} = require("../controller/getTodos");
const {getTodoById}  = require("../controller/getTodoById")
const {updateTodos} = require("../controller/updatetodos")
const {deleteTodo} = require('../controller/deleteTodo')



// routes 

router.post('/createtodo',createTodo);
router.get('/getTodos',getTodo);
router.get('/getTodos/:id',getTodoById);
router.put("/updateTodo/:id", updateTodos);
router.delete("/deleteTodoById/:id", deleteTodo);
module.exports = router;