/* Add a New BEER PAGE */

import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { store } from "../../../../store"
import { addBeerSuccessful, handleChange, snackBarGreenOpen, snackBarRedOpen } from "../../../../actions"
import { CancelLink } from "../../../Atoms/CancelLink/CancelLink"
import { SnackbarGreen } from "../../../Atoms/SnackbarGreen/SnackbarGreen"
import { SnackbarRed } from "../../../Atoms/SnackbarRed/SnackbarRed"
import { Button } from "../../../Atoms/Button/Button"
import { InputText } from "../../../Atoms/InputText/InputText"
import { InputTextDoubleLength } from "../../../Atoms/InputTextDoubleLength/InputTextDoubleLength"
import { InputTextTripleLength } from "../../../Atoms/InputTextTripleLength/InputTextTripleLength"
import { TextArea } from "../../../Atoms/TextArea/TextArea"
import axios from "axios"
import "../css/BeerNew.css"

class BeerNew extends Component {

   handleChange = (e) => {
      store.dispatch(handleChange(e))
   }

   handleSubmit = (e) => {
      e.preventDefault()

      const { name, brewery, streetAddress, city, state, zip, phone,
              latitude, longitude, image, website, beerType, beerColor,
              glassware, abv, ibu, rating, notes, username } = store.getState()

      const newBeer = {
         name: name,
         brewery: brewery,
         streetAddress: streetAddress,
         city: city,
         state: state,
         zip: zip,
         phone: phone,
         latitude: latitude,
         longitude: longitude,
         image: image,
         website: website,
         beerType: beerType,
         beerColor: beerColor,
         glassware: glassware,
         abv: abv,
         ibu: ibu,
         rating: rating,
         notes: notes,
         addedBy: username
      }

      axios.post("http://localhost:9000/beer", newBeer)
         .then((response) => {
            if (response.data.name === "MongoError") {
               store.dispatch(snackBarRedOpen(true, "Beer was not added..."))
               setTimeout(() => {
                  store.dispatch(snackBarRedOpen(false, ""))
               }, 2000);
            } else {
               store.dispatch(snackBarGreenOpen(true, "Beer was added!"))
               setTimeout(() => {
                  store.dispatch(snackBarGreenOpen(false, ""))
                  store.dispatch(addBeerSuccessful())
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addBeerSuccessful, msg, snackBarGreenOpen, snackBarRedOpen } = store.getState()

      return (
         <div className="BeerNew-main-container">
            {addBeerSuccessful && <Redirect to="/beer" />}
            <div className="BeerNew-form-container">
               <h1 className="BeerNew-h1">Add a New Beer</h1>
               <form
                  className="BeerNew-form"
                  onSubmit={this.handleSubmit} >

                  <div className="BeerNew-div-row">
                     <InputText label="Beer Name:" type="text" name="name" handleChange={this.handleChange} />
                     <InputText label="Brewery Name:" type="text" name="brewery" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">
                     <InputTextDoubleLength label="Street Address:" type="text" name="streetAddress" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">
                     <InputText label="City:" type="text" name="city" handleChange={this.handleChange} />
                     <InputText label="State:" type="text" name="state" handleChange={this.handleChange} />
                     <InputText label="Zip Code:" type="text" name="zip" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">
                     <InputText label="Phone:" type="text" name="phone" handleChange={this.handleChange} />
                     <InputText label="Latitude:" type="text" name="latitude" handleChange={this.handleChange} />
                     <InputText label="Longitude:" type="text" name="longitude" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">
                     <InputTextTripleLength label="Beer Image URL:" type="text" name="image" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">
                     <InputTextTripleLength label="Website URL:" type="text" name="website" handleChange={this.handleChange} />
                  </div>

                  <div className="BeerNew-div-row">

                     <label className="InputText-label"><span className="InputText-span">Beer Type:</span>
                        <div>
                           <select
                              type="text"
                              name="beerType"
                              className="BeerNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Select a Beer Type</option>
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
                              className="BeerNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Select a Beer Color</option>
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
                              className="BeerNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Select Proper Glassware</option>
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

                  <div className="BeerNew-div-row">

                     <InputText label="ABV:" type="text" name="abv" handleChange={this.handleChange} />
                     <InputText label="IBU:" type="text" name="ibu" handleChange={this.handleChange} />
                     <InputText label="Rating:" type="text" name="rating" handleChange={this.handleChange} />

                  </div>

                  <div className="BeerNew-div-row">
                     <TextArea rows="5" cols="89" label="Notes:" name="notes" placeholder="Enter Personal Notes Here" type="text" handleChange={this.handleChange} />
                  </div>

                  {snackBarGreenOpen && <SnackbarGreen msg={msg} />}
                  {snackBarRedOpen && <SnackbarRed msg={msg} />}

                  <div className="BeerNew-div-row BeerNew-submit-button">
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

export default BeerNew