var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  streetAddress: String,
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: String,
  phone: String,
  latitude: String,
  longitude: String,
  image: String,
  website: String,
  favFood: String,
  rating: String,
  cuisine: String,
  price: String,
  notes: String,
  addedBy: String
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

/* Get Restaurant */
router.get('/', function (req, res) {
  // console.log("Get req.query: ", req.query)
  Restaurant.find(req.query, function (err, foundRestaurant) {
    if (err) {
      console.error("User Get Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Get Route foundUser", foundRestaurant)
      res.send(foundRestaurant)
    }
  })
});

/* Add A New Restaurant */
router.post("/", function (req, res) {
  // console.log("User Post Route req.body", req.body)
  Restaurant.create(req.body, (err, newRestaurant) => {
    if (err) {
      console.error("User Post Route Error: ", err)
      res.send(err)
    }
    else {
      // console.log("User Post Route newRestaurant", newRestaurant)
      res.send(newRestaurant)
    }
  })
})

/* Delete One RESTAURANT */
router.delete('/', async function (req, res) {
  await Restaurant.findByIdAndRemove(req.query, (err, deletedRestaurant) => {
     if (err) {
        console.error(err.errmsg)
        res.send(err)
     } else {
        console.log(deletedRestaurant)
        res.send(deletedRestaurant)
     }
  })
})

/* Put (Update) One RESTAURANT */
router.put('/', async function (req, res) {
  // console.log("Update Beer req.body.id", req.body.id)
  // console.log("Update Beer req.body", req.body)
   await Restaurant.findByIdAndUpdate({_id: req.body.id}, req.body, (err, updatedRestaurant) => {
     if (err) {
        console.error(err.errmsg)
        res.send(err)
     } else {
        console.log(updatedRestaurant)
        res.send(updatedRestaurant)
     }
   })
})

module.exports = router;