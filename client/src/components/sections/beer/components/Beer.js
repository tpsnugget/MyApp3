/* BEER LANDING PAGE */

import React, { Component } from "react"
import { store } from "../../../../store"
import { allowedToModifySelection, getOneBeerData } from "../../../../actions"
import { chosenId } from "../../../../actions"
import axios from "axios"
import PropTypes from "prop-types"
import Sidebar from "../../../Sidebar"
import { Mininavbar } from "../../../Mininavbar"
import { CancelLink } from "../../../Atoms/CancelLink/CancelLink"
import BeerShow from "./BeerShow"
import "../css/Beer.css"


class Beer extends Component {

   static propTypes = {
      /* name (Beer) comes from App.js, sent to Sidebar and Mininavbar */
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
               store.dispatch(getOneBeerData(response.data[0]))
               const { oneBeerData, username } = store.getState()
               const { addedBy } = oneBeerData
               store.dispatch(allowedToModifySelection(addedBy === username))
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { name } = this.props
      const { allowedToModifySelection, chosenId, oneBeerData } = store.getState()

      // const allowedToModifySelection = (addedBy === username ? true : false)

      return (
         <div className="Beer-main-container">
            <div className="Beer-nav-container">
               <Sidebar name={name} select={this.handleShow} />
               <div className="Beer-inner-container">
                  <Mininavbar name={name} chosenId={chosenId} allowedToModifySelection={allowedToModifySelection} />
                  <div>
                     {(chosenId !== "") && <BeerShow data={oneBeerData} />}
                  </div>
                  <div className="Beer-cancel">
                     <CancelLink />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Beer