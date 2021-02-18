const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

const port = process.env.port || 3000;

// Routes

const employeeRouter = require('./routes/employee');

app.listen(port, console.log(`Server running on port ${port}`));

app.use('/employee', employeeRouter);

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true }, () => console.log('Connected to MongoDB'));

