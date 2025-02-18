const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("connection successfully")
    })
    .catch((Error)=>{
        console.log("some issues in db connectioin");
        console.log(Error.message);
        process.exit(1);
    })
}

module.exports = dbConnect ;