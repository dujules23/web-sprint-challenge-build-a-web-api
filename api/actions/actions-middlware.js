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

// export middleware

module.exports ={
  validateActionsId
}