'use strict';

// getting-started.js

const mongoose = require('mongoose');

require('dotenv').config();
const server = require('./src/server');

server.start(process.env.PORT)