import React, { Component } from "react"
import PropTypes from "prop-types"
import "../css/RestaurantShow.css"

class RestaurantShow extends Component {

   static defaultProps = {
      data: {}
   }

   static propTypes = {
      /* Passed down from Beer.js
         Used here to show all the data for one selected BEER */
      data: PropTypes.object
   }

   render() {

      const { name, streetAddress, city, state, zip, phone, image,
         website, favFood, cuisine, price, rating, notes, addedBy } = this.props.data

      const address = `${city}, ${state} ${zip}`

      return (
         <div className="RestaurantShow-main-container">
            <div className="RestaurantShow-upper-container">
               <div className="RestaurantShow-left-container">
                  <h1>{name}</h1>
                  <p>{streetAddress}</p>
                  <p>
                     <span>{address}</span>
                  </p>
                  <p>{phone}</p>
                  {website === "N/A" ? "" :
                     <div><a href={website} target="_blank" rel="noopener noreferrer">Website:{" "}{name}</a></div>}
                  <p><strong>Cuisine:</strong>{" "}{cuisine}</p>
                  <p><strong>Favorite Food:</strong>{" "}{favFood}</p>
                  <p><strong>Price:</strong>{" "}{price}</p>
                  <p><strong>Rating:</strong>{" "}{rating}</p>
                  <p><strong>Notes:</strong>{" "}{notes}</p>
                  <p>Added By: {addedBy}</p>
               </div>
               <div className="RestaurantShow-right-container">
                  <img src={image} alt={name} className="RestaurantShow-img" />
               </div>
            </div>
         </div>
      )
   }
}

export default RestaurantShow