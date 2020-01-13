/* Add a New RECIPE PAGE */

import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { store } from "../../../../store"
import { addRecipeSuccessful, handleChange, snackBarGreenOpen, snackBarRedOpen } from "../../../../actions"
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


class RecipeNew extends Component {

   handleChange(e) {
      store.dispatch(handleChange(e))
   }

   handleSubmit(e) {
      e.preventDefault()

      const {
         name, creator, description, image, website, servings, time, ingredients,
               prepSteps, keywords, rating, notes, username } = store.getState()

      const newRecipe = {
         name: name,
         creator: creator,
         description: description,
         image: image,
         website: website,
         servings: servings,
         time: time,
         ingredients: ingredients,
         prepSteps: prepSteps,
         keywords: keywords,
         rating: rating,
         notes: notes,
         addedBy: username
      }

      axios.post("http://localhost:9000/recipe", newRecipe)
         .then((response) => {
            if (response.data.name === "MongoError") {
               store.dispatch(snackBarRedOpen(true, "Recipe was not added..."))
               setTimeout(() => {
                  store.dispatch(snackBarRedOpen(false, ""))
               }, 2000);
            } else {
               store.dispatch(snackBarGreenOpen(true, "Recipe was added!"))
               setTimeout(() => {
                  store.dispatch(snackBarGreenOpen(false, ""))
                  store.dispatch(addRecipeSuccessful(true))
               }, 2000);
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { addRecipeSuccessful, msg, snackBarGreenOpen, snackBarRedOpen } = store.getState()

      return (
         <div className="RecipeNew-main-container">
            {addRecipeSuccessful && <Redirect to="/recipe" />}
            <div className="RecipeNew-form-container">
               <h1 className="RecipeNew-h1">Add a New Recipe</h1>
               <form
                  className="RecipeNew-form"
                  onSubmit={this.handleSubmit} >

                  <div className="RecipeNew-div-row">
                     <InputTextDoubleLength label="Recipe Name:" name="name" placeholder="Recipe Name" type="text" handleChange={this.handleChange} />
                     <InputText label="Created By:" name="creator" placeholder="Created By" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <TextArea rows="10" cols="89" label="Description:" name="description" placeholder="Enter Description Here" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <InputTextTripleLength label="Recipe Image URL:" name="image" placeholder="Recipe Image URL" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <InputTextTripleLength label="Website URL:" name="website" placeholder="Website URL" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <InputText label="Servings:" name="servings" placeholder="Number of Servings" type="text" handleChange={this.handleChange} />
                     <InputText label="Time:" name="time" placeholder="Total Time" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <TextArea rows="10" cols="89" label="Ingredients:" name="ingredients" placeholder="Enter Ingredients Here" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <TextArea rows="10" cols="89" label="Preperation Steps:" name="prepSteps" placeholder="Enter Preperation Steps Here" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">
                     <TextArea rows="2" cols="89" label="Keywords:" name="keywords" placeholder="Enter Keywords Here" type="text" handleChange={this.handleChange} />
                  </div>

                  <div className="RecipeNew-div-row">

                     <label className="InputText-label"><span className="InputText-span">Recipe Rating:</span>
                        <div>
                           <select
                              type="text"
                              name="beerType"
                              className="RecipeNew-select"
                              onChange={this.handleChange}
                           >
                              <option value="">Select a Rating</option>
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
                     <TextArea rows="5" cols="89" label="Notes:" name="notes" placeholder="Enter Personal Notes Here" type="text" handleChange={this.handleChange} />
                  </div>

                  {snackBarGreenOpen && <SnackbarGreen msg={msg} />}
                  {snackBarRedOpen && <SnackbarRed msg={msg} />}


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

export default RecipeNew