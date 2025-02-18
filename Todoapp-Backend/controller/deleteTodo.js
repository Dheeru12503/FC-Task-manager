const Todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Todo is delete successfully ",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({  
      success: true,
      error: err.message,
      message: "internal server error",
    });
  }
};
