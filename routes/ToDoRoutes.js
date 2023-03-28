const {Router} = require('express')

const router = Router();
const {getTodo,saveTodo,deleteTodo,updateTodo} = require('../controllers/ToDoController');
router.get('/getTodo',getTodo)
router.post("/saveTodo", saveTodo);
router.post("/deleteTodo", deleteTodo);
router.patch("/updateTodo", updateTodo);

module.exports = router;