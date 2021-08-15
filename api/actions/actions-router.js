// Write your "actions" router here!
// add middlewares here related to actions
const express = require("express")
const router = express.Router()

// Bring in Actions Model
const Actions = require("./actions-model")


// Bring in Middleware
const { validateActionsId, validateActionsBody } = require("./actions-middlware")


// Actions endpoints

// Get an array of actions
router.get("/", (req, res) => {
  Actions.get()
    .then(action => {
      res.status(200).json(action)
    })
    .catch(err => {
      res.status(500).json({
        message: "Error retrieving actions", err
      })
      res.json([])
    })
})

// Get an array of actions by Id
router.get("/:id", validateActionsId, (req,res) => {
  res.status(200).json(req.actions)
})

// Post an Array of actions
router.post("/", validateActionsBody, async (req, res) => {
  const newAction = await Actions.insert(req.body)
  res.status(201).json(newAction)
})

// Update an array of actions (Put request)
router.put("/:id", validateActionsId, validateActionsBody, async (req, res) => {
  const updatedAction = await Actions.update(req.params.id, req.body)
  res.status(200).json(updatedAction)
})

// Export router
module.exports = router