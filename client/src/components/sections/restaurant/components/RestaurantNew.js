/* Add a New Restauratn PAGE */

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
import "../css/RestaurantNew.css"


class RestaurantNew extends Component {

   static propTypes = {
      /* Passed down from App.js, gets added to database to identify which
         user added the new restaurant to the db */
      loggedInName: PropTypes.string
   }

   constructor(props) {
      super(props)
      this.state = {
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
         favFood: "",
         rating: "",
         cuisine: "",
         price: "",
         notes: "",
         snackBarGreenOpen: false,
         snackBarRedOpen: false,
         msg: "",
         addRestaurantSuccessful: false
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

      const newRestaurant = {
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
         favFood: this.state.favFood,
         rating: this.state.rating,
         cuisine: this.state.cuisine,
         price: this.state.price,
         notes: this.state.notes,
         addedBy: this.props.username
      }

      axios.post("http://localhost:9000/restaurant", newRestaurant)
         .then((response) => {
            console.log(response)
            if (response.data.name === "MongoError") {
               this.setState({
                  snackBarRedOpen: true,
                  msg: "Restaurant was not added..."
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
                  msg: "Restaurant was added!"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarGreenOpen: false,
                     msg: "",
                     addRestaurantSuccessful: true
                  })
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addRestaurantSuccessful, snackBarGreenOpen, snackBarRedOpen, cancel } = this.state

      return (
         <div className="RestaurantNew-main-container">
            {addRestaurantSuccessful && <Redirect to="/restaurant" />}
            {cancel && <Redirect to="/landing" />}
            <div className="RestaurantNew-form-container">
               <h1 className="RestaurantNew-h1">Add a New Restaurant</h1>
               <form
                  className="RestaurantNew-form"
                  onSubmit={this.handleSubmit}
               >

                  <div className="RestaurantNew-div-row">
                     <InputText label="Restaurant Name:" type="text" name="name" handleChange={this.handleChange} />
                  </div>

                  <div className="RestaurantNew-div-row">
                     <InputTextDoubleLength label="Street Address:" type="text" name="streetAddress" inputClassName="RestaurantNew-input-address RestaurantNew-input" handleChange={this.handleChange} />
                  </div>

                  <div className="RestaurantNew-div-row">
                     <InputText label="City:" type="text" name="city" handleChange={this.handleChange} />
                     <InputText label="State:" type="text" name="state" handleChange={this.handleChange} />
                     <InputText label="Zip Code:" type="text" name="zip" handleChange={this.handleChange} />
                  </div>

                  <div className="RestaurantNew-div-row">
                     <InputText label="Phone:" type="text" name="phone" handleChange={this.handleChange} />
                     <InputText label="Latitude:" type="text" name="latitude" handleChange={this.handleChange} />
                     <InputText label="Longitude:" type="text" name="longitude" handleChange={this.handleChange} />
                  </div>

                  <div className="RestaurantNew-div-row">
                     <InputTextTripleLength label="Restaurant Image URL:" type="text" name="image" inputClassName="RestaurantNew-input-image RestaurantNew-input" handleChange={this.handleChange} />
                  </div>

                  <div className="RestaurantNew-div-row">
                     <InputTextTripleLength label="Website URL:" type="text" name="website" inputClassName="RestaurantNew-input-image RestaurantNew-input" handleChange={this.handleChange} />
                  </div>

                  <div className="RestaurantNew-div-row">
                     <InputText label="Favorite Food:" type="text" name="favFood" handleChange={this.handleChange} />
                     <InputText label="Rating:" type="text" name="rating" handleChange={this.handleChange} />
                  </div>

                  <div className="RestaurantNew-div-row">
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Cuisine:</span>
                        <div>
                           <select
                              type="text"
                              name="cuisine"
                              className="RestaurantNew-select"
                              onChange={this.handleChange}>
                              <option value="">Select a Cuisine</option>
                              <option value="american">American</option>
                              <option value="cajun">Cajun</option>
                              <option value="french">French</option>
                              <option value="german">German</option>
                              <option value="indian">Indian</option>
                              <option value="italian">Italian</option>
                              <option value="japanese">Japanese</option>
                              <option value="korean">Korean</option>
                              <option value="mexican">Mexican</option>
                              <option value="spanish">Spanish</option>
                              <option value="thai">Thai</option>
                           </select>
                        </div>
                     </label>
                     <label className="RestaurantNew-label"><span className="RestaurantNew-span">Cost:</span>
                        <div>
                           <select
                              type="text"
                              name="price"
                              className="RestaurantNew-select"
                              onChange={this.handleChange}>
                              <option value="">Total Price Per Person</option>
                              <option value="under10">Less than $10 each</option>
                              <option value="under15">Less than $15 each</option>
                              <option value="under20">Less than $20 each</option>
                              <option value="under25">Less than $25 each</option>
                              <option value="under30">Less than $30 each</option>
                              <option value="under35">Less than $35 each</option>
                              <option value="under40">Less than $40 each</option>
                              <option value="under45">Less than $45 each</option>
                              <option value="under50">Less than $50 each</option>
                              <option value="over50">More than $50 each</option>
                           </select>
                        </div>
                     </label>
                  </div>

                  <div className="RestaurantNew-div-row">
                     <TextArea rows="5" cols="89" label="Notes:" name="notes" placeholder="Enter Personal Notes Here" type="text" handleChange={this.handleChange} />
                  </div>

                  {snackBarGreenOpen && <SnackbarGreen msg={this.state.msg} />}
                  {snackBarRedOpen && <SnackbarRed msg={this.state.msg} />}

                  <div className="RestaurantNew-div-row RestaurantNew-submit-button">
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

export default RestaurantNew