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

// Validate Project Body is correct
const validateProject = (req, res, next) => {

  console.log(req.body)
  const { name, description } = req.body
  console.log(req.body)

  try{
    if(!name || !description){
      res.status(400).json({message: "Please make sure to have name, description, completed, or actions filled out"})
    }
    else{
      next();
    }
  }
  catch{
    res.status(500).json({message: "error finding project"})
  }
}


// export Middleware functions

module.exports ={
  validateProjectId,
  validateProject
}