const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const jobsapRouter = require('./routes/jobsap');
const rolesapRouter = require('./routes/rolesap');
const userapRouter = require('./routes/userap');


//require('dotenv').config();
// const db = require('./models');
const app = express ();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));



const mongoURI = ''

mongoose
  .connect( `mongodb://localhost:27017/new_project` ,{
    useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true
  })

  .then(() => {
    console.log("Successfully connect to MongoDB.");
    
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
    
  });



app.use('/jobsap', jobsapRouter);
app.use('/rolesap',rolesapRouter);
app.use('/userap',userapRouter);


app.listen(port, () => {

    console.log('server is running on port:'+ port);
});
