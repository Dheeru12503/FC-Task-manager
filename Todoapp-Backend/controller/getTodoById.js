const Todo = require("../models/todo");

exports.getTodoById = async(req,res)=>{
    try{
        const {id} = req.params;
        const todo = await Todo.findById({ _id: id });
        res.status(200).json({
            success : true,
            data : todo,
            message : "Todo is fetched succussfully",
        })
    }
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({
            success : false ,
            data : "internal sever error",
            message : err.message,
        })
    }
}