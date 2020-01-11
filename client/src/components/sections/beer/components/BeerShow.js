import React, { Component } from "react"
import PropTypes from "prop-types"
import "../css/BeerShow.css"

class BeerShow extends Component {

   static propTypes = {
      /* Passed down from Beer.js
         Used here to show all the data for one selected BEER */
      data: PropTypes.array
   }

   render() {

      const { name, brewery, streetAddress, city, state, zip, phone, image,
         website, beerType, beerColor, abv, ibu, rating } = this.props.data

      const address = `${city}, ${state} ${zip}`
      const description = `Beer Type: ${beerType} - Beer Color: ${beerColor}`
      const numbers = `ABV: ${abv} - IBU: ${ibu} - Rating: ${rating}`

      return (
         <div className="BeerShow-main-container">
            <div className="BeerShow-left-container">
               <h1>{name}</h1>
               <h2>{brewery}</h2>
               <p>{streetAddress}</p>
               <p>
                  <span>{address}</span>
               </p>
               <p>{phone}</p>
               {(website === "N/A" || website === "") ? "" :
                  <div><a href={website} target="_blank" rel="noopener noreferrer">Website:{" "}{brewery}</a></div>}
               <p>{description}</p>
               <p>{numbers}</p>
            </div>
            <div className="BeerShow-right-container">
               <img src={image} alt={name} className="BeerShow-img" />
            </div>
         </div>
      )
   }
}

export default BeerShow