const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

const port = process.env.port || 3000;

app.listen(port, console.log(`Server running on port ${port}`));

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true }, () => console.log('Connected to MongoDB'));
