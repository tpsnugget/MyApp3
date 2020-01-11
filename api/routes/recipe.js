var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  creator: String,
  description: String,
  image: String,
  website: String,
  servings: String,
  time: String,
  ingredients: String,
  prepSteps: String,
  keywords: String,
  rating: String,
  notes: String,
  addedBy: String
})

const Recipe = mongoose.model("Recipe", recipeSchema)

/* Get Recipe */
router.get('/', function (req, res) {
  console.log("Get Recipe req.query: ", req.query)
  // Recipe.find(req.query, {name: 1, image: 1}, function (err, foundBeer) {
  Recipe.find(req.query, function (err, foundBeer) {
    if (err) {
      console.error("User Get Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Get Route foundUser", foundBeer)
      res.send(foundBeer)
    }
  })
});

/* Add A New Recipe */
router.post("/", function (req, res) {
  // console.log("User Post Route req.body", req.body)
  Recipe.create(req.body, (err, newBeer) => {
    if (err) {
      console.error("User Post Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Post Route newBeer", newBeer)
      res.send(newBeer)
    }
  })
})

/* Delete One RECIPE */
router.delete('/', async function (req, res) {
  await Recipe.findByIdAndRemove(req.query, (err, deletedRecipe) => {
     if (err) {
        console.error(err.errmsg)
        res.send(err)
     } else {
        console.log(deletedRecipe)
        res.send(deletedRecipe)
     }
  })
})

/* Put (Update) One Recipe */
router.put('/', async function (req, res) {
  // console.log("Update Beer req.body.id", req.body.id)
  // console.log("Update Beer req.body", req.body)
   await Recipe.findByIdAndUpdate({_id: req.body.id}, req.body, (err, updatedRecipe) => {
     if (err) {
        console.error(err.errmsg)
        res.send(err)
     } else {
        console.log(updatedRecipe)
        res.send(updatedRecipe)
     }
   })
})

module.exports = router;
