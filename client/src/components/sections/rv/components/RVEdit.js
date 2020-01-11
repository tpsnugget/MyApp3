/* EDIT RV PAGE */

import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import PropTypes from "prop-types"
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
         streetAddress: "",
         city: "",
         state: "",
         zip: "",
         phone: "",
         latitude: "",
         longitude: "",
         image: "",
         website: "",
         reviewWebsite: "",
         reviewWebsiteRating: "",
         siteId: "",
         electricalHookup: "",
         water: false,
         sewerHookup: false,
         dumpStation: false,
         pullThroughSite: false,
         rate: "",
         petsAllowed: false,
         petRestrictions: "",
         restrooms: false,
         showers: false,
         myRating: "",
         notes: "",
         addedBy: "",
         snackBarGreenOpen: false,
         snackBarRedOpen: false,
         msg: "",
         addRVSuccessful: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   componentDidMount() {
      this.setState({
         chosenId: this.props.location.state.id,
      })

      axios.get("http://localhost:9000/rv", {
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
               streetAddress: this.state.data.streetAddress,
               city: this.state.data.city,
               state: this.state.data.state,
               zip: this.state.data.zip,
               phone: this.state.data.phone,
               latitude: this.state.data.latitude,
               longitude: this.state.data.longitude,
               image: this.state.data.image,
               website: this.state.data.website,
               reviewWebsite: this.state.data.reviewWebsite,
               reviewWebsiteRating: this.state.data.reviewWebsiteRating,
               siteId: this.state.data.siteId,
               electricalHookup: this.state.data.electricalHookup,
               water: this.state.data.water,
               sewerHookup: this.state.data.sewerHookup,
               dumpStation: this.state.data.dumpStation,
               pullThroughSite: this.state.data.pullThroughSite,
               rate: this.state.data.rate,
               petsAllowed: this.state.data.petsAllowed,
               petRestrictions: this.state.data.petRestrictions,
               restrooms: this.state.data.restrooms,
               showers: this.state.data.showers,
               myRating: this.state.data.myRating,
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

      const editRV = {
         name: this.state.name,
         streetAddress: this.state.streetAddress,
         city: this.state.city,
         state: this.state.state,
         zip: this.state.zip,
         phone: this.state.phone,
         latitude: this.state.latitude,
         longitude: this.state.longitude,
         image: this.state.image,
         website: this.state.website,
         reviewWebsite: this.state.reviewWebsite,
         reviewWebsiteRating: this.state.reviewWebsiteRating,
         siteId: this.state.siteId,
         electricalHookup: this.state.electricalHookup,
         water: this.state.water,
         sewerHookup: this.state.sewerHookup,
         dumpStation: this.state.dumpStation,
         pullThroughSite: this.state.pullThroughSite,
         rate: this.state.rate,
         petsAllowed: this.state.petsAllowed,
         petRestrictions: this.state.petRestrictions,
         restrooms: this.state.restrooms,
         showers: this.state.showers,
         myRating: this.state.myRating,
         notes: this.state.notes,
         addedBy: this.props.username
      }

      axios.put("http://localhost:9000/rv", editRV)
         .then((response) => {
            // console.log(response)
            if (response.data.name === "MongoError") {
               this.setState({
                  snackBarRedOpen: true,
                  msg: "RV Site was not Updated..."
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
                  msg: "RV Site was Updated!"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarGreenOpen: false,
                     msg: "",
                     addRVSuccessful: true
                  })
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addRVSuccessful, snackBarGreenOpen, snackBarRedOpen, name, streetAddress,
              city, state, zip, phone, latitude, longitude, image, website,
              reviewWebsite, reviewWebsiteRating, siteId, electricalHookup, water,
              sewerHookup, dumpStation, pullThroughSite, rate, petsAllowed,
              petRestrictions, restrooms, showers, myRating, notes } = this.state

      return (
         <div className="RVNew-main-container">
            {addRVSuccessful && <Redirect to="/rv" />}
            <div className="RVNew-form-container">
               <h1 className="RVNew-h1">Add a New RV Site</h1>
               <form
                  className="RVNew-form"
                  onSubmit={this.handleSubmit} >

                  <div className="RVNew-div-row">
                     <InputTextDoubleLength label="Campground Name:" name="name" placeholder="Campground Name" type="text" value={name} handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputTextDoubleLength label="Street Address:" name="streetAddress" placeholder="Street Address" type="text" value={streetAddress} handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputText label="City:" name="city" placeholder="City" type="text" value={city} handleChange={this.handleChange} />
                     <InputText label="State:" name="state" placeholder="State" type="text" value={state} handleChange={this.handleChange} />
                     <InputText label="Zip Code:" name="zip" placeholder="Zip Code" type="text" value={zip} handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputText label="Phone:" name="phone" placeholder="Phone Number" type="text" value={phone} handleChange={this.handleChange} />
                     <InputText label="Latitude:" name="latitude" placeholder="Latitude" type="text" value={latitude} handleChange={this.handleChange} />
                     <InputText label="Longitude:" name="longitude" placeholder="Longitude" type="text" value={longitude} handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputTextTripleLength label="Campground Image URL:" name="image" placeholder="Campground Image URL" type="text" value={image} handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputTextTripleLength label="Website URL:" name="website" placeholder="Website URL" type="text" value={website} handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputTextTripleLength label="Review Website URL:" name="reviewWebsite" placeholder="Review Website URL" type="text" value={reviewWebsite} handleChange={this.handleChange} />
                  </div>

                  <div className="RVNew-div-row">
                     <InputText label="Review Site Rating:" name="reviewWebsiteRating" placeholder="Review Website Rating" type="text" value={reviewWebsiteRating} handleChange={this.handleChange} />
                     <InputText label="Site Id:" name="siteId" placeholder="Site Id" type="text" value={siteId} handleChange={this.handleChange} />
                     <InputText label="Electrical Hookup:" name="electricalHookup" placeholder="30 Amp or 30 / 50 Amp" type="text" value={electricalHookup} handleChange={this.handleChange} />
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
                              <option value={water}>{water}</option>
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
                              <option value={sewerHookup}>{sewerHookup}</option>
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
                              <option value={dumpStation}>{dumpStation}</option>
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
                              <option value={pullThroughSite}>{pullThroughSite}</option>
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
                              <option value={rate}>{rate}</option>
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
                           <option value={petsAllowed}>{petsAllowed}</option>
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                           </select>
                        </div>
                     </label>

                  </div>

                  <div className="RVNew-div-row">
                     <InputTextTripleLength label="Pet Restrictions:" name="petRestrictions" placeholder="Pet Restrictions" type="text" value={petRestrictions} handleChange={this.handleChange} />
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
                              <option value={restrooms}>{restrooms}</option>
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
                              <option value={showers}>{showers}</option>
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
                              <option value={myRating}>{myRating}</option>
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
                     <TextArea rows="10" cols="89" label="Notes:" name="notes" placeholder="Personal Notes" type="text" value={notes} handleChange={this.handleChange} />
                  </div>

                  {snackBarGreenOpen && <SnackbarGreen msg={this.state.msg} />}
                  {snackBarRedOpen && <SnackbarRed msg={this.state.msg} />}

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