const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/users');

const app = express();

app.use(cors());

//body-parser analyse le corps de la demande
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req,res) => {
  res.send("Hello backend with JS")
})

app.use('/my-app/api/users', userRoute);

app.listen(9002, () => {
  console.log("Server listen on port 9002")
})