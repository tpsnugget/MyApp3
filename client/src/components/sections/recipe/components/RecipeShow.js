import React, { Component } from "react"
import PropTypes from "prop-types"
import "../css/RecipeShow.css"

class RecipeShow extends Component {

   static propTypes = {
      /* Passed down from Recipe.js
         Used here to show all the data for one selected RECIPE */
      data: PropTypes.object
   }

   render() {

      const { name, creator, description, image, website, servings,
         time, ingredients, prepSteps, keywords, rating, notes } = this.props.data

      const myRating = (rating === "" ? "TBD" : rating)

      const metrics = `Servings: ${servings} - Time: ${time} - Rating: ${myRating}`

      return (
         <div className="RecipeShow-main-container">
            <div className="RecipeShow-upper-container">
               <div className="RecipeShow-left-container">
                  <h1>{name} by {creator}</h1>
                  <p>{description}</p>
                  <p>{metrics}</p>
                  {website === "N/A" ? "" :
                     <div><a href={website} target="_blank" rel="noopener noreferrer">Website:{" "}{name}</a></div>}
               </div>
               <div className="RecipeShow-right-container">
                  <img src={image} alt={name} className="RecipeShow-img" />
               </div>
            </div>
            <div className="RecipeShow-lower-container">
               <p><strong>Ingredients:</strong>{" "}{ingredients}</p>
               <p><strong>Preperation Steps:</strong>{" "}{prepSteps}</p>
               <p><strong>Keywords: </strong>{" "}{keywords}</p>
               <p><strong>Notes:</strong>{" "}{notes}</p>
            </div>
         </div>
      )
   }
}

export default RecipeShow