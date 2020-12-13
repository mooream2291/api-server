'use strict';

// getting-started.js
require('dotenv').config();

const mongoose = require('mongoose');
const server = require('./src/server');

mongoose.connect(process.env.MONGOOSE_URI, {useNewUrlParser: true, useUnifiedTopology: true});
server.start(process.env.PORT)