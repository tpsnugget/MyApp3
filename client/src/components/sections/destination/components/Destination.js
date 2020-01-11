/* DESTINATION LANDING PAGE */

import React, { Component } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import Sidebar from "../../../Sidebar"
import { Mininavbar } from "../../../Mininavbar"
import { CancelLink } from "../../../Atoms/CancelLink/CancelLink"
import DestinationShow from "./DestinationShow"
import "../css/Destination.css"


class Destination extends Component {

   static propTypes = {
      /* name (Destination) comes from App.js, sent to Sidebar and Mininavbar */
      name: PropTypes.string,

      /* Passed down from App.js. Used to determine if active user is the one
         who added the selected BEER to the db. They are the only one who can
         Edit or Delete the selected BEER. */
      loggedInName: PropTypes.string
   }

   constructor(props) {
      super(props)
      this.state = {
         chosenId: "",
         data: []
      }
      this.handleShow = this.handleShow.bind(this)
   }

   handleShow(name, id) {
      this.setState({
         chosenId: id
      })

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
               this.setState({
                  data: response.data[0]
               })
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { chosenId, data } = this.state
      const { addedBy } = this.state.data
      const { loggedInName, name } = this.props

      const allowedToModifySelection = (addedBy === loggedInName ? true : false)

      return (
         <div className="Destination-main-container">
            <div className="Destination-nav-container">
               <Sidebar name={name} select={this.handleShow} />
               <div className="Destination-inner-container">
                  <Mininavbar name={name} chosenId={chosenId} allowedToModifySelection={allowedToModifySelection} />
                  <div>
                  {(chosenId !== "") && <DestinationShow data={data} />}
                     {/* {(chosenId !== "") && <BeerShow data={data} />} */}
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