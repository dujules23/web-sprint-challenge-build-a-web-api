// Write your "projects" router here!
const express = require('express')
const router = express.Router()

// Bring in Model
const Projects = require('./projects-model')

// Bring in Middleware Functions
const { validateProjectId, validateProject } = require("./projects-middleware")
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


// Post an Array of Projects
router.post("/", validateProject, async (req, res) => {
  const project = await Projects.insert(req.body)
  res.status(201).json(project)
})

// Update an Array of Projects (Put request)

router.put("/:id", validateProjectId, validateProject, async (req, res) => {

  const updatedProject = await Projects.update(req.params.id, req.body)
  res.status(201).json(updatedProject)
})

// export router

module.exports = router