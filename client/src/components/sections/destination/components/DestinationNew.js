/* Add a New DESTINATION PAGE */

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
import "../css/DestinationNew.css"


class DestinationNew extends Component {

   static propTypes = {
      /* Passed down from App.js, gets added to database to identify which
         user added the new beer to the db */
      loggedInName: PropTypes.string
   }

   constructor(props) {
      super(props)
      this.state = {
         name: "",
         streetAddress: "",
         city: "",
         state: "",
         locationCode: "",
         airportCode: "",
         country: "",
         continent: "",
         phone: "",
         latitude: "",
         longitude: "",
         image: "",
         website: "",
         rating: "",
         personalNotes: "",
         pubNotes: "",
         restaurantNotes: "",
         sightNotes: "",
         tourNotes: "",
         snackBarGreenOpen: false,
         snackBarRedOpen: false,
         msg: "",
         addDestinationSuccessful: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault()

      const newDestination = {
         name: this.state.name,
         streetAddress: this.state.streetAddress,
         city: this.state.city,
         state: this.state.state,
         locationCode: this.state.locationCode,
         airportCode: this.state.airportCode,
         country: this.state.country,
         continent: this.state.continent,
         phone: this.state.phone,
         latitude: this.state.latitude,
         longitude: this.state.longitude,
         image: this.state.image,
         website: this.state.website,
         rating: this.state.rating,
         personalNotes: this.state.personalNotes,
         pubNotes: this.state.pubNotes,
         restaurantNotes: this.state.restaurantNotes,
         sightNotes: this.state.sightNotes,
         tourNotes: this.state.tourNotes,
         addedBy: this.props.username
      }

      axios.post("http://localhost:9000/destination", newDestination)
         .then((response) => {
            if (response.data.name === "MongoError") {
               this.setState({
                  snackBarRedOpen: true,
                  msg: "Destination was not added..."
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
                  msg: "Destination was added!"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarGreenOpen: false,
                     msg: "",
                     addDestinationSuccessful: true
                  })
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addDestinationSuccessful, snackBarGreenOpen, snackBarRedOpen } = this.state

      return (
         <div className="DestinationNew-main-container">
            {addDestinationSuccessful && <Redirect to="/destination" />}
            <div className="DestinationNew-form-container">
               <h1 className="DestinationNew-h1">Add a New Destination</h1>
               <form
                  className="DestinationNew-form"
                  onSubmit={this.handleSubmit} >

                  <div className="DestinationNew-div-row">
                     <InputTextDoubleLength label="Destination Name:" type="text" name="name" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <InputTextDoubleLength label="Street Address:" type="text" name="streetAddress" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <InputText label="City:" type="text" name="city" handleChange={this.handleChange} />
                     <InputText label="State:" type="text" name="state" handleChange={this.handleChange} />
                     <InputText label="Location Code:" type="text" name="locationCode" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <InputText label="Airport Code:" type="text" name="airportCode" handleChange={this.handleChange} />
                     <InputText label="Country:" type="text" name="country" handleChange={this.handleChange} />
                     <InputText label="Continent:" type="text" name="continent" handleChange={this.handleChange} />
                  </div>


                  <div className="DestinationNew-div-row">
                     <InputText label="Phone:" type="text" name="phone" handleChange={this.handleChange} />
                     <InputText label="Latitude:" type="text" name="latitude" handleChange={this.handleChange} />
                     <InputText label="Longitude:" type="text" name="longitude" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <InputTextTripleLength label="Image URL:" type="text" name="image" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <InputTextTripleLength label="Website URL:" type="text" name="website" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <TextArea rows="5" cols="89" label="Pubs To Checkout:" name="pubNotes" placeholder="Pubs to Checkout" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <TextArea rows="5" cols="89" label="Restaurants To Try:" name="restaurantNotes" placeholder="Restaurants To Try" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <TextArea rows="5" cols="89" label="Sights To See:" name="sightNotes" placeholder="Sights To See" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <TextArea rows="5" cols="89" label="Tours To Take:" name="tourNotes" placeholder="Tours To Take" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <TextArea rows="5" cols="89" label="Personal Notes:" name="personalNotes" placeholder="Enter Personal Notes Here" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="DestinationNew-div-row">
                     <InputText label="Rating:" type="text" name="rating" handleChange={this.handleChange} />
                  </div>

                  {snackBarGreenOpen && <SnackbarGreen msg={this.state.msg} />}
                  {snackBarRedOpen && <SnackbarRed msg={this.state.msg} />}

                  <div className="DestinationNew-div-row DestinationNew-submit-button">
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

export default DestinationNew