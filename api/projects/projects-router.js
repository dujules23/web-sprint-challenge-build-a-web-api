// Write your "projects" router here!
const express = require('express')
const router = express.Router()

// Bring in Model
const Projects = require('./projects-model')

// Bring in Middleware Functions
const { validateProjectId } = require("./projects-middleware")
// Projects Endpoints


// Get an array of Projects
router.get('/', (req, res) => {
  Projects.get()
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json({
        message: "Error retrieving projects", err
      })
      res.json([])
    })
})

// Get Array of Projects by Id
router.get("/:id", validateProjectId, (req, res) => {
  res.status(200).json(req.project)
})


// export router

module.exports = router