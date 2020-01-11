/* BEER LANDING PAGE */

import React, { Component } from "react"
import { store } from "../../../../store"
import { getBeerData } from "../../../../actions"
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

   constructor(props) {
      super(props)
      this.state = {
         // chosenId: "",
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
               this.setState({
                  data: response.data[0]
               })
               store.dispatch(getBeerData(response.data[0]))
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      // const { data } = this.state
      const { addedBy } = this.state.data
      const { name } = this.props
      const { beerData, chosenId, username } = store.getState()

      // console.log("beerData: ", beerData)

      const allowedToModifySelection = (addedBy === username ? true : false)

      return (
         <div className="Beer-main-container">
            <div className="Beer-nav-container">
               <Sidebar name={name} select={this.handleShow} />
               <div className="Beer-inner-container">
                  <Mininavbar name={name} chosenId={chosenId} allowedToModifySelection={allowedToModifySelection} />
                  <div>
                     {(chosenId !== "") && <BeerShow data={beerData} />}
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