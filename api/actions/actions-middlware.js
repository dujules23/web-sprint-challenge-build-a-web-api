// add middlewares here related to projects

// Bring in Model
const Actions = require("./actions-model")


// Validate project id
const validateActionsId = async (req, res, next) => {
  const { id } = req.params

  const actions = await Actions.get(id)

  try {
    if(!actions){
      res.status(404).json({ message: "actions not found"})
    }
    else{
      req.actions = actions
      next();
    }
  }
  catch{
    res.status(500).json({ message: "error finding actions"})
  }

}


// Validate Actions Body is correct
const validateActionsBody = (req, res, next) => {

  console.log(req.body)
  const { project_id, description, notes } = req.body
  console.log(req.body)

  try{
    if(!project_id || !description || !notes){
      res.status(400).json({message: "Please make sure to have project_id, description, or notes filled out"})
    }
    else{
      next();
    }
  }
  catch{
    res.status(500).json({message: "error finding project"})
  }
}

// export middleware

module.exports ={
  validateActionsId, 
  validateActionsBody
}