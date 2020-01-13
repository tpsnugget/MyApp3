import React, { Component } from "react"
import { store } from "../store"
import { getBeerData, getDestinationData, getRecipeData,
         getRestaurantData, getRVData } from "../actions"
import axios from "axios"
import PropTypes from "prop-types"
import "../css/Sidebar.css"

class Sidebar extends Component{

   static propTypes = {
      /* Passed down from one of the four main landing pages
         (Beer, Recipe, Restaurant, RV), used to complete the proper path
         for axios */
      name: PropTypes.string,

      /* Passed down from one of the five main landing pages
         (Beer, Destination, Recipe, Restaurant, RV), used to identify which item in the
         Sidebar was selected for Display, Edit, or Delete operations. Gets
         passed back to the Parent main landing page component. */
      select: PropTypes.func
   }

   handleClick = (e) => {
      e.preventDefault()
      this.props.select(this.props.name, e.target.id)
   }

   componentDidMount(){

      const url = `http://localhost:9000/${this.props.name.toLowerCase()}`

      axios.get(url, {
      })
         .then((response) => {
            if (response.data === "") {
               console.log("axios.get not in the db")
            } else {
               if(this.props.name === "Beer"){store.dispatch(getBeerData(response.data))}
               if(this.props.name === "Destination"){store.dispatch(getDestinationData(response.data))}
               if(this.props.name === "Recipe"){store.dispatch(getRecipeData(response.data))}
               if(this.props.name === "Restaurant"){store.dispatch(getRestaurantData(response.data))}
               if(this.props.name === "RV"){store.dispatch(getRVData(response.data))}
            }
         })
         .catch((err) => console.log(err))
   }

   render(){

      var { data } = store.getState()

      data.sort( (a, b) => {
         return a.name.localeCompare(b.name)
      } )

      const display = data.map( (item, i) => {

         // Multiple id's are used below. I tried adding it only to the outer div,
         // but clicking on an interior element that did not have the id also included
         // would not return the id from the div.

         return(
            <div key={item._id} id={item._id} onClick={this.handleClick}>
               <p className="Sidebar-p" id={item._id}>{item.name}</p>
               <img
                  id={item._id}
                  src={item.image}
                  alt={item.name}
                  className="Sidebar-img"
               />
               {i < data.length - 1 ? <hr /> : ""}
            </div>
         )
      } )

      return(
         <div className="Sidebar-main-container">
            {display}
         </div>
      )
   }
}

export default Sidebar