/* DESTINATION LANDING PAGE */

import React, { Component } from "react"
import { store } from "../../../../store"
import { allowedToModifySelection, getOneDestinationData } from "../../../../actions"
import { chosenId } from "../../../../actions"
import axios from "axios"
import PropTypes from "prop-types"
import Sidebar from "../../../Sidebar"
import { Mininavbar } from "../../../Mininavbar"
import { CancelLink } from "../../../Atoms/CancelLink/CancelLink"
import DestinationShow from "./DestinationShow"
import "../css/Destination.css"


class Destination extends Component {

   componentDidMount(){
      store.dispatch(allowedToModifySelection(false))
      store.dispatch(chosenId(""))
   }

   static propTypes = {
      /* name (Destination) comes from App.js, sent to Sidebar and Mininavbar */
      name: PropTypes.string,
   }

   constructor(props) {
      super(props)
      this.state = {
         chosenId: "",
         data: []
      }
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
               store.dispatch(getOneDestinationData(response.data[0]))
               const { oneDestinationData, username } = store.getState()
               const { addedBy } = oneDestinationData
               store.dispatch(allowedToModifySelection(addedBy === username))
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { name } = this.props
      const { allowedToModifySelection, oneDestinationData, chosenId } = store.getState()

      return (
         <div className="Destination-main-container">
            <div className="Destination-nav-container">
               <Sidebar name={name} select={this.handleShow} />
               <div className="Destination-inner-container">
                  <Mininavbar name={name} chosenId={chosenId} allowedToModifySelection={allowedToModifySelection} />
                  <div>
                  {(chosenId !== "") && <DestinationShow data={oneDestinationData} />}
                  </div>
                  <div className="Destination-cancel">
                     <CancelLink />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Destination