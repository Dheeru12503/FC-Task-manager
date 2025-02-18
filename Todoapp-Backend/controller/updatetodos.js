const Todo = require("../models/todo");

exports.updateTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, descripition } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, descripition, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: todo,
      message : "updated succuessfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
        success : false ,
        data : "internal sever error",
        message : err.massage,
    })
  }
};
