const express = require('express');
const server = express();

// bring in routers
const projectRouter = require('./projects/projects-router')
const actionRouter = require('./actions/actions-router')


// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

// Use this to make sure the body can be read, otherwise it cannot read json
server.use(express.json())

// Use Routers
server.use("/api/projects", projectRouter)
server.use("/api/actions", actionRouter)


module.exports = server;
