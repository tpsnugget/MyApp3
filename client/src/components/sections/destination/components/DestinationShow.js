import React, { Component } from "react"
import PropTypes from "prop-types"
import "../css/DestinationShow.css"

class DestinationShow extends Component {

   static defaultProps = {
      data: {}
   }

   static propTypes = {
      /* Passed down from Destination.js
         Used here to show all the data for one selected Destination */
      data: PropTypes.object
   }

   render() {

      const { name, streetAddress, city, state, locationCode, airportCode,
              country, continent, phone, latitude, longitude, image, website,
              rating, personalNotes, pubNotes, restaurantNotes, sightNotes,
              tourNotes, addedBy } = this.props.data

      return (
         <div className="DestinationShow-main-container">
            <div className="DestinationShow-left-container">
               <h1>{name}</h1>
               {streetAddress !== "" ? <p><span>{streetAddress}</span></p> : null}
               <p>
                  {city !== "" ? <span><strong>City: </strong>{city}</span> : null}
                  {state !== "" ? <span>{", "}<strong>State: </strong>{state}</span> : null}
                  {locationCode !== "" ? <span>{", "}<strong>Location Code: </strong>{locationCode}</span> : null}
               </p>
               <p>
                  {airportCode !== "" ? <span><strong>Airport Code: </strong>{airportCode}</span> : null}
                  {country !== "" ? <span>{", "}<strong>Country: </strong>{country}</span> : null}
                  {continent !== "" ? <span>{", "}<strong>Continent: </strong>{continent}</span> : null}
               </p>
               <p>
                  {phone !== "" ? <span><strong>Phone: </strong>{phone}</span> : null}
                  </p>
                  <p>
                  {latitude !== "" ? <span><strong>Latitude: </strong>{latitude}</span> : null}
                  {longitude !== "" ? <span>{", "}<strong>Longitude: </strong>{longitude}</span> : null}
               </p>
               {(website !== "") ?
                  <div>Website:{" "}<a href={website} target="_blank" rel="noopener noreferrer">{website}</a></div> : null}
                  {rating !== "" ? <p><strong>Rating{": "}</strong>{rating}</p> : null}
                  {personalNotes !== "" ? <p><strong>Personal Notes{": "}</strong>{personalNotes}</p> : null}
                  {pubNotes !== "" ? <p><strong>Pub Notes{": "}</strong>{pubNotes}</p> : null}
                  {restaurantNotes !== "" ? <p><strong>Restaurant Notes{": "}</strong>{restaurantNotes}</p> : null}
                  {sightNotes !== "" ? <p><strong>Sight Notes{": "}</strong>{sightNotes}</p> : null}
                  {tourNotes !== "" ? <p><strong>Tour Notes{": "}</strong>{tourNotes}</p> : null}
                  <p>Added By: {addedBy}</p>
            </div>
            <div className="DestinationShow-right-container">
               <img src={image} alt={name} className="DestinationShow-img" />
            </div>
         </div>
      )
   }
}

export default DestinationShow