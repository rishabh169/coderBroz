const mongoose = require("mongoose");
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;



mongoose.connect("mongodb://localhost:27017/coderbroz",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>console.log("connection successful"))
.catch((err) =>  console.log(err));

// app.post('/content/:slug/:id')

// const createDocument = async() =>{
//   try{
//     const rishabh = new Comment({
//       name:"uday",
//       comment : "nice video"
//     });
    
//     const dta = await rishabh.save();
//     console.log(dta);
//   }
//   catch(err){
//     console.log(err);
//   }
// }

// createDocument();


const commentRouter = require('./routes/comment');
app.use('/',commentRouter);


app.listen(port, () =>{
  console.log("working" + port);
} )



