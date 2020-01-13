/* RV LANDING PAGE */

import React, { Component } from "react"
import { store } from "../../../../store"
import { allowedToModifySelection, getOneRVData } from "../../../../actions"
import { chosenId } from "../../../../actions"
import axios from "axios"
import PropTypes from "prop-types"
import Sidebar from "../../../Sidebar"
import { Mininavbar } from "../../../Mininavbar"
import { CancelLink } from "../../../Atoms/CancelLink/CancelLink"
import RVShow from "./RVShow"
import "../css/RV.css"


class RV extends Component {

   componentDidMount(){
      store.dispatch(allowedToModifySelection(false))
      store.dispatch(chosenId(""))
   }

   static propTypes = {
      /* name (RV) comes from App.js, sent to Sidebar and Mininavbar */
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
               store.dispatch(getOneRVData(response.data[0]))
               const { oneRVData, username } = store.getState()
               const { addedBy } = oneRVData
               store.dispatch(allowedToModifySelection(addedBy === username))
            }
         })
         .catch((err) => console.log(err))
   }

   render() {

      const { name } = this.props
      const { allowedToModifySelection, oneRVData, chosenId, username } = store.getState()

      return (
         <div className="RV-main-container">
            <div className="RV-nav-container">
               <Sidebar name={name} select={this.handleShow} />
               <div className="RV-inner-container">
                  <Mininavbar name={name} chosenId={chosenId} allowedToModifySelection={allowedToModifySelection} />
                  <div>
                     {(chosenId !== "") && <RVShow data={oneRVData} />}
                  </div>
                  <div className="RV-cancel">
                     <CancelLink />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default RV