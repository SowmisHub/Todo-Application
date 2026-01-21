import { readDB, writeDB } from "../models/todo.model.js";

// GET ALL TODOS
const getTodos = (req, res) => {
  try {
    const db = readDB();
    res.status(200).json(db.todos);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ADD TODO
const addTodo = (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const db = readDB();

    const newTodo = {
      id: db.todos.length + 1,
      title,
      completed: false
    };

    db.todos.push(newTodo);
    writeDB(db);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE TODO
const updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const db = readDB();

    const todo = db.todos.find(t => t.id == id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.completed = true;
    writeDB(db);

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE TODO
const deleteTodo = (req, res) => {
  try {
    const { id } = req.params;
    const db = readDB();

    const index = db.todos.findIndex(t => t.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    db.todos.splice(index, 1);
    writeDB(db);

    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo };
