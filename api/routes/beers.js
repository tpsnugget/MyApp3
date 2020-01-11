var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

// const beerSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   brewery: String,
//   streetAddress: String,
//   city: String,
//   state: String,
//   zip: String,
//   phone: String,
//   latitude: String,
//   longitude: String,
//   image: String,
//   website: String,
//   beerType: String,
//   beerColor: String,
//   glassware: String,
//   abv: String,
//   ibu: String,
//   rating: String,
//   addedBy: String
// })

// const Beer = mongoose.model("Beer", beerSchema)

/* Get Beer */
router.get('/', function (req, res) {
  console.log("Get Beer req.query: ", req.query)
  Beer.find(req.query, {name: 1, image: 1}, function (err, foundBeer) {
  // Beer.find(req.query, function (err, foundBeer) {
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

module.exports = router;
