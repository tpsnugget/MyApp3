/* EDIT RECIPE PAGE */

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
import "../css/RecipeNew.css"


class RecipeEdit extends Component {

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
         creator: "",
         description: "",
         image: "",
         website: "",
         servings: "",
         time: "",
         ingredients: "",
         prepSteps: "",
         keywords: "",
         rating: "",
         notes: "",
         addedBy: "",
         snackBarGreenOpen: false,
         snackBarRedOpen: false,
         msg: "",
         addRecipeSuccessful: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   componentDidMount() {
      this.setState({
         chosenId: this.props.location.state.id,
      })

      axios.get("http://localhost:9000/recipe", {
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
               creator: this.state.data.creator,
               description: this.state.data.description,
               image: this.state.data.image,
               website: this.state.data.website,
               servings: this.state.data.servings,
               time: this.state.data.time,
               ingredients: this.state.data.ingredients,
               prepSteps: this.state.data.prepSteps,
               keywords: this.state.data.keywords,
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

      const editRecipe = {
         id: this.state.id,
         name: this.state.name,
         creator: this.state.creator,
         description: this.state.description,
         image: this.state.image,
         website: this.state.website,
         servings: this.state.servings,
         time: this.state.time,
         ingredients: this.state.ingredients,
         prepSteps: this.state.prepSteps,
         keywords: this.state.keywords,
         rating: this.state.rating,
         notes: this.state.notes,
         addedBy: this.props.username
      }

      axios.put("http://localhost:9000/recipe", editRecipe)
         .then((response) => {
            // console.log(response)
            if (response.data.name === "MongoError") {
               this.setState({
                  snackBarRedOpen: true,
                  msg: "Recipe was not Updated..."
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
                  msg: "Recipe was Updated!"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarGreenOpen: false,
                     msg: "",
                     addRecipeSuccessful: true
                  })
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { name, creator, description, image, website, servings, time, ingredients,
         prepSteps, keywords, rating, notes, addRecipeSuccessful, snackBarGreenOpen,
         snackBarRedOpen } = this.state

      return (
         <div className="RecipeNew-main-container">
            {addRecipeSuccessful && <Redirect to="/recipe" />}
            <div className="RecipeNew-form-container">
               <h1 className="RecipeNew-h1">Update Recipe</h1>
               <form
                  className="RecipeNew-form"
                  onSubmit={this.handleSubmit} >

                  <div className="RecipeNew-div-row">
                     <InputTextDoubleLength label="Recipe Name:" name="name" placeholder="Recipe Name" type="text" value={name} handleChange={this.handleChange} />
                     <InputText label="Created By:" name="creator" placeholder="Created By" type="text" value={creator} handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <TextArea rows="10" cols="89" label="Description:" name="description" placeholder="Enter Description Here" type="text" value={description} handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <InputTextTripleLength label="Recipe Image URL:" name="image" placeholder="Recipe Image URL" type="text" value={image} handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <InputTextTripleLength label="Website URL:" name="website" placeholder="Website URL" type="text" value={website} handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <InputText label="Servings:" name="servings" placeholder="Number of Servings" type="text" value={servings} handleChange={this.handleChange} />
                     <InputText label="Time:" name="time" placeholder="Total Time" type="text" value={time} handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <TextArea rows="10" cols="89" label="Ingredients:" name="ingredients" placeholder="Enter Ingredients Here" type="text" value={ingredients} handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <TextArea rows="10" cols="89" label="Preperation Steps:" name="prepSteps" placeholder="Enter Preperation Steps Here" type="text" value={prepSteps} handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <TextArea rows="2" cols="89" label="Keywords:" name="keywords" placeholder="Enter Keywords Here" type="text" value={keywords} handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">

                     <label className="InputText-label"><span className="InputText-span">Recipe Rating:</span>
                        <div>
                           <select
                              type="text"
                              name="rating"
                              className="RecipeNew-select"
                              onChange={this.handleChange}
                           >
                              <option value={rating}>{rating}</option>
                              <option value="5.0">Best Meal Ever!</option>
                              <option value="4.5">Totally Awesome!</option>
                              <option value="4.0">Will Definitely Make Again</option>
                              <option value="3.5">Pretty Good</option>
                              <option value="3.0">OK</option>
                              <option value="2.5">Here and Below - No!</option>
                           </select>
                        </div>
                     </label>
                  </div>

                  <div className="RecipeNew-div-row">
                     <TextArea rows="5" cols="89" label="Notes:" name="notes" placeholder="Enter Personal Notes Here" type="text" value={notes} handleChange={this.handleChange} />
                  </div>

                  {snackBarGreenOpen && <SnackbarGreen msg={this.state.msg} />}
                  {snackBarRedOpen && <SnackbarRed msg={this.state.msg} />}

                  <div className="RecipeNew-div-row RecipeNew-submit-button">
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

export default RecipeEdit