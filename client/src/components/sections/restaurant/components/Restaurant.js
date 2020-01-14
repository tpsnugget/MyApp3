/* RESTAURANT LANDING PAGE */

import React, { Component } from "react"
import { store } from "../../../../store"
import { allowedToModifySelection, getOneRestaurantData } from "../../../../actions"
import { chosenId } from "../../../../actions"
import axios from "axios"
import PropTypes from "prop-types"
import Sidebar from "../../../Sidebar"
import { Mininavbar } from "../../../Mininavbar"
import { CancelLink } from "../../../Atoms/CancelLink/CancelLink"
import RestaurantShow from "./RestaurantShow"
import "../css/Restaurant.css"

class Restaurant extends Component {

   componentDidMount(){
      store.dispatch(allowedToModifySelection(false))
      store.dispatch(chosenId(""))
   }

   static propTypes = {
      /* name (Restaurant) comes from App.js, sent to Sidebar and Mininavbar */
      name: PropTypes.string
   }

   handleShow = (name, id) => {
      store.dispatch(chosenId(id))

      const url = `http://localhost:9000/${name.toLowerCase()}`

      axios.get(url, {
         params: {
            _id: id
         }
      })
         .then((response) => {
            if (response.data === "") {
               console.log("axios.get not in the db")
            } else {
               store.dispatch(getOneRestaurantData(response.data[0]))
               const { oneRestaurantData, username } = store.getState()
               const { addedBy } = oneRestaurantData
               store.dispatch(allowedToModifySelection(addedBy === username))
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { name } = this.props
      const { allowedToModifySelection, oneRestaurantData, chosenId } = store.getState()

      return (
         <div className="Restaurant-main-container">
            <div className="Restaurant-nav-container">
               <Sidebar name={name} select={this.handleShow} />
               <div className="Restaurant-inner-container">
                  <Mininavbar name={name} chosenId={chosenId} allowedToModifySelection={allowedToModifySelection} />
                  <div>
                     {(chosenId !== "") && <RestaurantShow data={oneRestaurantData} />}
                  </div>
                  <div className="Restaurant-cancel">
                     <CancelLink />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Restaurant