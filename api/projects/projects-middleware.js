// add middlewares here related to projects

// Bring in Model
const Projects = require("./projects-model")


// Validate project id
const validateProjectId = async (req, res, next) => {
  const { id } = req.params

  const project = await Projects.get(id)

  try {
    if(!project){
      res.status(404).json({ message: "project not found"})
    }
    else{
      req.project = project
      next();
    }
  }
  catch{
    res.status(500).json({ message: "error finding project"})
  }

}



// export Middleware functions

module.exports ={
  validateProjectId
}