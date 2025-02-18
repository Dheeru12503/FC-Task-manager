const Todo = require('../models/todo');

  exports.createTodo = async(req,res) =>{
      try{
        const {title , descripition } = req.body ;
        const response  = await Todo.create({title,descripition});

        res.status(200).json({
          success: true,
          data:response,
          message:'Entry Created successfully'
        });
      }
      
      catch(err){
          console.error(err);
          console.log(err);
          res.status(500).json({
              success:false,
              data:'internal sever error',
              message:err.message
          })
      }
  }