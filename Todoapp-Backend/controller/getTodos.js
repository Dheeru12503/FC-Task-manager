const Todo = require("../models/todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200)
    .json({
      success: true,
      data: todos, 
      message: "All Todos is successfully fetched",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal sever error",
      message: err.message,
    });
  }
};
