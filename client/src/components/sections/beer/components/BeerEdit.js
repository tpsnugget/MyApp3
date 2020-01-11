/* Edit a BEER PAGE */

import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import { CancelLink } from "../../../Atoms/CancelLink/CancelLink"
import { SnackbarGreen } from "../../../Atoms/SnackbarGreen/SnackbarGreen"
import { SnackbarRed } from "../../../Atoms/SnackbarRed/SnackbarRed"
import { Button } from "../../../Atoms/Button/Button"
import { InputText } from "../../../Atoms/InputText/InputText"
import { InputTextDoubleLength } from "../../../Atoms/InputTextDoubleLength/InputTextDoubleLength"
import { InputTextTripleLength } from "../../../Atoms/InputTextTripleLength/InputTextTripleLength"
import { TextArea } from "../../../Atoms/TextArea/TextArea"
import axios from "axios"
import "../css/BeerEdit.css"


class BeerEdit extends Component {

   static propTypes = {
      /* Passed down from App.js, gets added to database to identify which
         user added the new beer to the db */
      loggedInName: PropTypes.string
   }

   constructor(props) {
      super(props)
      this.state = {
         data: [],
         id: "",
         name: "",
         brewery: "",
         streetAddress: "",
         city: "",
         state: "",
         zip: "",
         phone: "",
         latitude: "",
         longitude: "",
         image: "",
         website: "",
         beerType: "",
         beerColor: "",
         glassware: "",
         abv: "",
         ibu: "",
         rating: "",
         notes: "",
         chosenId: "",
         snackBarGreenOpen: false,
         snackBarRedOpen: false,
         msg: "",
         addBeerSuccessful: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   componentDidMount() {
      this.setState({
         chosenId: this.props.location.state.id,
      })

      axios.get("http://localhost:9000/beer", {
         params: {
            _id: this.props.location.state.id
         }
      })
         .then((response) => {
            if (response.data === "") {
               console.log("axios.get not in the db")
            } else {
               this.setState({
                  data: response.data[0]
               })
            }
         })
         .then(() => {
            this.setState({
               id: this.state.data._id,
               name: this.state.data.name,
               brewery: this.state.data.brewery,
               streetAddress: this.state.data.streetAddress,
               city: this.state.data.city,
               state: this.state.data.state,
               zip: this.state.data.zip,
               phone: this.state.data.phone,
               latitude: this.state.data.latitude,
               longitude: this.state.data.longitude,
               image: this.state.data.image,
               website: this.state.data.website,
               beerType: this.state.data.beerType,
               beerColor: this.state.data.beerColor,
               glassware: this.state.data.glassware,
               abv: this.state.data.abv,
               ibu: this.state.data.ibu,
               rating: this.state.data.rating,
               notes: this.state.data.notes,
               addedBy: this.state.data.username
            })
         })
         .catch((err) => console.log(err))
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault()

      const editBeer = {
         id: this.state.id,
         name: this.state.name,
         brewery: this.state.brewery,
         streetAddress: this.state.streetAddress,
         city: this.state.city,
         state: this.state.state,
         zip: this.state.zip,
         phone: this.state.phone,
         latitude: this.state.latitude,
         longitude: this.state.longitude,
         image: this.state.image,
         website: this.state.website,
         beerType: this.state.beerType,
         beerColor: this.state.beerColor,
         glassware: this.state.glassware,
         abv: this.state.abv,
         ibu: this.state.ibu,
         rating: this.state.rating,
         notes: this.state.notes,
         addedBy: this.props.username
      }

      axios.put("http://localhost:9000/beer", editBeer)
         .then((response) => {
            // console.log(response)
            if (response.data.name === "MongoError") {
               this.setState({
                  snackBarRedOpen: true,
                  msg: "Beer was not Updated..."
               })
               setTimeout(() => {
                  this.setState({
                     snackBarRedOpen: false,
                     msg: ""
                  })
               }, 2000);
            } else {
               this.setState({
                  snackBarGreenOpen: true,
                  msg: "Beer was Updated!"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarGreenOpen: false,
                     msg: "",
                     addBeerSuccessful: true
                  })
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addBeerSuccessful, snackBarGreenOpen, snackBarRedOpen, name, brewery, streetAddress,
         city, state, zip, phone, latitude, longitude, image, website, beerType,
         beerColor, glassware, abv, ibu, rating, notes } = this.state

      return (
         <div className="BeerEdit-main-container">
            {addBeerSuccessful && <Redirect to="/beer" />}
            <div className="BeerEdit-form-container">
               <h1 className="BeerEdit-h1">Edit Beer</h1>
               <form
                  className="BeerEdit-form"
                  onSubmit={this.handleSubmit} >

                  <div className="BeerEdit-div-row">
                     <InputText label="Beer Name:" type="text" name="name" value={name} handleChange={this.handleChange} />
                     <InputTextDoubleLength label="Brewery Name:" type="text" name="brewery" value={brewery} handleChange={this.handleChange} />
                  </div>

                  <div className="BeerEdit-div-row">
                     <InputTextDoubleLength label="Street Address:" type="text" name="streetAddress" value={streetAddress} handleChange={this.handleChange} />
                  </div>

                  <div className="BeerEdit-div-row">
                     <InputText label="City:" type="text" name="city" value={city} handleChange={this.handleChange} />
                     <InputText label="State:" type="text" name="state" value={state} handleChange={this.handleChange} />
                     <InputText label="Zip Code:" type="text" name="zip" value={zip} handleChange={this.handleChange} />
                  </div>

                  <div className="BeerEdit-div-row">
                     <InputText label="Phone:" type="text" name="phone" value={phone} handleChange={this.handleChange} />
                     <InputText label="Latitude:" type="text" name="latitude" value={latitude} handleChange={this.handleChange} />
                     <InputText label="Longitude:" type="text" name="longitude" value={longitude} handleChange={this.handleChange} />
                  </div>

                  <div className="BeerEdit-div-row">
                     <InputTextTripleLength label="Beer Image URL:" type="text" name="image" value={image} handleChange={this.handleChange} />
                  </div>

                  <div className="BeerEdit-div-row">
                     <InputTextTripleLength label="Website URL:" type="text" name="website" value={website} handleChange={this.handleChange} />
                  </div>

                  <div className="BeerEdit-div-row">

                     <label className="InputText-label"><span className="InputText-span">Beer Type:</span>
                        <div>
                           <select
                              type="text"
                              name="beerType"
                              className="BeerEdit-select"
                              onChange={this.handleChange}
                           >
                              <option value={beerType}>{beerType}</option>
                              <option value="ale">Ale</option>
                              <option value="amberAle">Amber Ale</option>
                              <option value="blackIpa">Black IPA</option>
                              <option value="brownAle">Brown Ale</option>
                              <option value="creamStout">Cream Stout</option>
                              <option value="doubleIpa">Double IPA</option>
                              <option value="englishBitter">English Bitter</option>
                              <option value="englishSpecialBitter">English Special Bitter</option>
                              <option value="ipa">IPA</option>
                              <option value="paleAle">Pale Ale</option>
                              <option value="porter">Porter</option>
                              <option value="redAle">Red Ale</option>
                              <option value="scotchAle">Scotch Ale</option>
                              <option value="stout">Stout</option>
                              <option value="wheat">Wheat</option>
                           </select>
                        </div>
                     </label>
                     <label className="InputText-label"><span className="InputText-span">Beer Color:</span>
                        <div>
                           <select
                              type="text"
                              name="beerColor"
                              className="BeerEdit-select"
                              onChange={this.handleChange}
                           >
                              <option value={beerColor}>{beerColor}</option>
                              <option value="paleStraw">Pale Straw</option>
                              <option value="straw">Straw</option>
                              <option value="paleGold">Pale Gold</option>
                              <option value="deepGold">Deep Gold</option>
                              <option value="paleAmber">Pale Amber</option>
                              <option value="mediumAmber">Medium Amber</option>
                              <option value="deepAmber">Deep Amber</option>
                              <option value="amberBrown">Amber Brown</option>
                              <option value="brwon">Brown</option>
                              <option value="rubyBrown">Ruby Brown</option>
                              <option value="deepBrown">Deep Brown</option>
                              <option value="black">Black</option>
                           </select>
                        </div>
                     </label>
                     <label className="InputText-label"><span className="InputText-span">Recommended Glassware:</span>
                        <div>
                           <select
                              type="text"
                              name="glassware"
                              className="BeerEdit-select"
                              onChange={this.handleChange}
                           >
                              <option value={glassware}>{glassware}</option>
                              <option value="goblet">Goblet</option>
                              <option value="imperial">Imperial</option>
                              <option value="krugMug">Krug Mug</option>
                              <option value="nonic">Nonic</option>
                              <option value="pilsner">Pilsner</option>
                              <option value="shaker">Shaker</option>
                              <option value="snifter">Snifter</option>
                              <option value="stange">Stange</option>
                              <option value="tankard">Tankard</option>
                              <option value="tulip">Tulip</option>
                              <option value="weiss">Weiss</option>
                           </select>
                        </div>
                     </label>
                  </div>

                  <div className="BeerEdit-div-row">

                     <InputText label="ABV:" type="text" name="abv" value={abv} handleChange={this.handleChange} />
                     <InputText label="IBU:" type="text" name="ibu" value={ibu} handleChange={this.handleChange} />
                     <InputText label="Rating:" type="text" name="rating" value={rating} handleChange={this.handleChange} />

                  </div>

                  <div className="BeerEdit-div-row">
                     <TextArea rows="5" cols="89" label="Notes:" name="notes" placeholder="Enter Personal Notes Here" type="text" value={notes} handleChange={this.handleChange} />
                  </div>

                  {snackBarGreenOpen && <SnackbarGreen msg={this.state.msg} />}
                  {snackBarRedOpen && <SnackbarRed msg={this.state.msg} />}

                  <div className="BeerEdit-div-row BeerEdit-submit-button">
                     <Button label="Submit" />
                  </div>

               </form>
            </div>

            <div>
               <CancelLink />
            </div>
         </div >
      )
   }
}

export default BeerEdit