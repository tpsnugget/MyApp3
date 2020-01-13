/* NEW RV PAGE */

import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { store } from "../../../../store"
import { addRVSuccessful, handleChange, snackBarGreenOpen, snackBarRedOpen } from "../../../../actions"
import { CancelLink } from "../../../Atoms/CancelLink/CancelLink"
import { SnackbarGreen } from "../../../Atoms/SnackbarGreen/SnackbarGreen"
import { SnackbarRed } from "../../../Atoms/SnackbarRed/SnackbarRed"
import { Button } from "../../../Atoms/Button/Button"
import { InputText } from "../../../Atoms/InputText/InputText"
import { TextArea } from "../../../Atoms/TextArea/TextArea"
import { InputTextDoubleLength } from "../../../Atoms/InputTextDoubleLength/InputTextDoubleLength"
import { InputTextTripleLength } from "../../../Atoms/InputTextTripleLength/InputTextTripleLength"
import axios from "axios"
import "../css/RVNew.css"


class RVNew extends Component {

   handleChange(e) {
      store.dispatch(handleChange(e))
   }

   handleSubmit(e) {
      e.preventDefault()

      const { name, streetAddress, city, state, zip, phone, latitude, longitude,
         image, website, reviewWebsite, reviewWebsiteRating, siteId,
         electricalHookup, water, sewerHookup, dumpStation, pullThroughSite,
         rate, petsAllowed, petRestrictions, restrooms, showers, myRating,
         notes, username } = store.getState()

      const newRV = {
         name: name,
         streetAddress: streetAddress,
         city: city,
         state: state,
         zip: zip,
         phone: phone,
         latitude: latitude,
         longitude: longitude,
         image: image,
         website: website,
         reviewWebsite: reviewWebsite,
         reviewWebsiteRating: reviewWebsiteRating,
         siteId: siteId,
         electricalHookup: electricalHookup,
         water: water,
         sewerHookup: sewerHookup,
         dumpStation: dumpStation,
         pullThroughSite: pullThroughSite,
         rate: rate,
         petsAllowed: petsAllowed,
         petRestrictions: petRestrictions,
         restrooms: restrooms,
         showers: showers,
         myRating: myRating,
         notes: notes,
         addedBy: username
      }

      axios.post("http://localhost:9000/rv", newRV)
         .then((response) => {
            if (response.data.name === "MongoError") {
               store.dispatch(snackBarRedOpen(true, "RV Site was not added..."))
               setTimeout(() => {
                  store.dispatch(snackBarRedOpen(false, ""))
               }, 2000);
            } else {
               store.dispatch(snackBarGreenOpen(true, "RV Site was added!"))
               setTimeout(() => {
                  store.dispatch(snackBarGreenOpen(false, ""))
                  store.dispatch(addRVSuccessful(true))
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addRVSuccessful, msg, snackBarGreenOpen, snackBarRedOpen } = store.getState()

      return (
         <div className="RVNew-main-container">
            {addRVSuccessful && <Redirect to="/rv" />}
            <div className="RVNew-form-container">
               <h1 className="RVNew-h1">Add a New RV Site</h1>
               <form
                  className="RVNew-form"
                  onSubmit={this.handleSubmit} >

                  <div className="RVNew-div-row">
                     <InputTextDoubleLength label="Campground Name:" name="name" placeholder="Campground Name" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputTextDoubleLength label="Street Address:" name="streetAddress" placeholder="Street Address" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputText label="City:" name="city" placeholder="City" type="text" handleChange={this.handleChange} />
                     <InputText label="State:" name="state" placeholder="State" type="text" handleChange={this.handleChange} />
                     <InputText label="Zip Code:" name="zip" placeholder="Zip Code" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputText label="Phone:" name="phone" placeholder="Phone Number" type="text" handleChange={this.handleChange} />
                     <InputText label="Latitude:" name="latitude" placeholder="Latitude" type="text" handleChange={this.handleChange} />
                     <InputText label="Longitude:" name="longitude" placeholder="Longitude" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputTextTripleLength label="Campground Image URL:" name="image" placeholder="Campground Image URL" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputTextTripleLength label="Website URL:" name="website" placeholder="Website URL" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputTextTripleLength label="Review Website URL:" name="reviewWebsite" placeholder="Review Website URL" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputText label="Review Site Rating:" name="reviewWebsiteRating" placeholder="Review Website Rating" type="text" handleChange={this.handleChange} />
                     <InputText label="Site Id:" name="siteId" placeholder="Site Id" type="text" handleChange={this.handleChange} />
                     <InputText label="Electrical Hookup:" name="electricalHookup" placeholder="30 Amp or 30 / 50 Amp" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">

                     <label className="InputText-label"><span className="InputText-span">Onsite Water:</span>
                        <div>
                           <select
                              type="text"
                              name="water"
                              className="RVNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Onsite Water</option>
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                           </select>
                        </div>
                     </label>
                     <label className="InputText-label"><span className="InputText-span">Onsite Sewer:</span>
                        <div>
                           <select
                              type="text"
                              name="sewerHookup"
                              className="RVNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Onsite Sewer</option>
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                           </select>
                        </div>
                     </label>

                     <label className="InputText-label"><span className="InputText-span">Campground Dump Station:</span>
                        <div>
                           <select
                              type="text"
                              name="dumpStation"
                              className="RVNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Campground Dump Station</option>
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                           </select>
                        </div>
                     </label>

                  </div>

                  <div className="RVNew-div-row">

                     <label className="InputText-label"><span className="InputText-span">Pull-through Site:</span>
                        <div>
                           <select
                              type="text"
                              name="pullThroughSite"
                              className="RVNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Pull-through Site</option>
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                           </select>
                        </div>
                     </label>
                     <label className="InputText-label"><span className="InputText-span">Rate:</span>
                        <div>
                           <select
                              type="text"
                              name="rate"
                              className="RVNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Rate</option>
                              <option value="over150">Over $150 / Night</option>
                              <option value="over125">Over $125 / Night</option>
                              <option value="over100">Over $100 / Night</option>
                              <option value="over90">Over $90 / Night</option>
                              <option value="over80">Over $80 / Night</option>
                              <option value="over70">Over $70 / Night</option>
                              <option value="over60">Over $60 / Night</option>
                              <option value="over50">Over $50 / Night</option>
                              <option value="over40">Over $40 / Night</option>
                              <option value="over30">Over $30 / Night</option>
                              <option value="over20">Over $20 / Night</option>
                              <option value="over10">Over $10 / Night</option>
                           </select>
                        </div>
                     </label>
                     <label className="InputText-label"><span className="InputText-span">Pets Allowed:</span>
                        <div>
                           <select
                              type="text"
                              name="petsAllowed"
                              className="RVNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Pets Allowed</option>
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                           </select>
                        </div>
                     </label>

                  </div>

                  <div className="RVNew-div-row">
                     <InputTextTripleLength label="Pet Restrictions:" name="petRestrictions" placeholder="Pet Restrictions" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">

                     <label className="InputText-label"><span className="InputText-span">Restrooms:</span>
                        <div>
                           <select
                              type="text"
                              name="restrooms"
                              className="RVNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Restrooms</option>
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                           </select>
                        </div>
                     </label>
                     <label className="InputText-label"><span className="InputText-span">Showers:</span>
                        <div>
                           <select
                              type="text"
                              name="showers"
                              className="RVNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Showers</option>
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                           </select>
                        </div>
                     </label>
                     <label className="InputText-label"><span className="InputText-span">My Rating:</span>
                        <div>
                           <select
                              type="text"
                              name="myRating"
                              className="RVNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Select a Rating</option>
                              <option value="5.0">Best RV Site Ever!</option>
                              <option value="4.5">Totally Awesome!</option>
                              <option value="4.0">Will Definitely Visit Again</option>
                              <option value="3.5">Pretty Good</option>
                              <option value="3.0">OK</option>
                              <option value="2.5">Here and Below - No!</option>
                           </select>
                        </div>
                     </label>

                  </div>

                  <div className="RecipeNew-div-row">
                     <TextArea rows="10" cols="89" label="Notes:" name="notes" placeholder="Personal Notes" type="text" handleChange={this.handleChange} />
                  </div>

                  {snackBarGreenOpen && <SnackbarGreen msg={msg} />}
                  {snackBarRedOpen && <SnackbarRed msg={msg} />}

                  <div className="RVNew-div-row RVNew-submit-button">
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

export default RVNew