/* Add a New DESTINATION PAGE */

import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { store } from "../../../../store"
import { addDestinationSuccessful, handleChange, snackBarGreenOpen, snackBarRedOpen } from "../../../../actions"
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

   handleChange = (e) => {
      store.dispatch(handleChange(e))
   }

   handleSubmit = (e) => {
      e.preventDefault()

      const { name, streetAddress, city, state, locationCode, airportCode, country,
              continent, phone, latitude, longitude, image, website, rating,
              personalNotes, pubNotes, restaurantNotes, sightNotes, tourNotes,
              username } = store.getState()

      const newDestination = {
         name: name,
         streetAddress: streetAddress,
         city: city,
         state: state,
         locationCode: locationCode,
         airportCode: airportCode,
         country: country,
         continent: continent,
         phone: phone,
         latitude: latitude,
         longitude: longitude,
         image: image,
         website: website,
         rating: rating,
         personalNotes: personalNotes,
         pubNotes: pubNotes,
         restaurantNotes: restaurantNotes,
         sightNotes: sightNotes,
         tourNotes: tourNotes,
         addedBy: username
      }

      axios.post("http://localhost:9000/destination", newDestination)
         .then((response) => {
            if (response.data.name === "MongoError") {
               store.dispatch(snackBarRedOpen(true, "Destination was not added..."))
               setTimeout(() => {
                  store.dispatch(snackBarRedOpen(false, ""))
               }, 2000);
            } else {
               store.dispatch(snackBarGreenOpen(true, "Destination was added!"))
               store.dispatch(addDestinationSuccessful())
               setTimeout(() => {
                  store.dispatch(snackBarGreenOpen(false, ""))
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addDestinationSuccessful, msg, snackBarGreenOpen, snackBarRedOpen } = store.getState()

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

                  {snackBarGreenOpen && <SnackbarGreen msg={msg} />}
                  {snackBarRedOpen && <SnackbarRed msg={msg} />}

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