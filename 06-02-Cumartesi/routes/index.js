const express = require("express");
const TodoController = require("../todoControllers/todos");

const router = express.Router();

router.get("/api/v1/todos", TodoController.getAllTodos);
router.get("/api/v1/todos/:id", TodoController.getTodo);
router.post("/api/v1/todos", TodoController.createTodo);
router.put("/api/v1/todos/:id", TodoController.updateTodo);
router.delete("/api/v1/todos/:id", TodoController.deleteTodo);

module.exports = router;
