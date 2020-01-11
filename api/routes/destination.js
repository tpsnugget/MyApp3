var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  streetAddress: String,
  city: String,
  state: String,
  locationCode: String,
  airportCode: String,
  country: String,
  continent: String,
  phone: String,
  latitude: String,
  longitude: String,
  image: String,
  website: String,
  rating: String,
  personalNotes: String,
  pubNotes: String,
  restaurantNotes: String,
  sightNotes: String,
  tourNotes: String,
  addedBy: String
})

const Destination = mongoose.model("Destination", destinationSchema)

/* Get All DESTINATIONs */
router.get('/', function (req, res) {
  console.log("Get Destination req.query: ", req.query)
  // Destination.find(req.query, {name: 1, image: 1}, function (err, foundDestination) {
  Destination.find(req.query, function (err, foundDestination) {
    if (err) {
      console.error("User Get Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Get Route foundUser", foundDestination)
      res.send(foundDestination)
    }
  })
});

/* Add A New DESTINATION */
router.post("/", function (req, res) {
  // console.log("User Post Route req.body", req.body)
  Destination.create(req.body, (err, newDestination) => {
    if (err) {
      console.error("User Post Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Post Route newDestination", newDestination)
      res.send(newDestination)
    }
  })
})

/* Delete One DESTINATION */
router.delete('/', async function (req, res) {
  await Destination.findByIdAndRemove(req.query, (err, deletedDestination) => {
     if (err) {
        console.error(err.errmsg)
        res.send(err)
     } else {
        console.log(deletedDestination)
        res.send(deletedDestination)
     }
  })
})

/* Put (Update) One DESTINATION */
router.put('/', async function (req, res) {
  console.log("Update Destination req.body.id", req.body.id)
  console.log("Update Destination req.body", req.body)
   await Destination.findByIdAndUpdate({_id: req.body.id}, req.body, (err, updatedDestination) => {
     if (err) {
        console.error(err.errmsg)
        res.send(err)
     } else {
        console.log(updatedDestination)
        res.send(updatedDestination)
     }
   })
})

module.exports = router;
