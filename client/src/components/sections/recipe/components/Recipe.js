/* RECIPE LANDING PAGE */

import React, { Component } from "react"
import { store } from "../../../../store"
import { allowedToModifySelection, getOneRecipeData } from "../../../../actions"
import { chosenId } from "../../../../actions"
import axios from "axios"
import PropTypes from "prop-types"
import Sidebar from "../../../Sidebar"
import { Mininavbar } from "../../../Mininavbar"
import { CancelLink } from "../../../Atoms/CancelLink/CancelLink"
import RecipeShow from "./RecipeShow"
import "../css/Recipe.css"


class Recipe extends Component{

   componentDidMount(){
      store.dispatch(allowedToModifySelection(false))
      store.dispatch(chosenId(""))
   }

   static propTypes = {
      /* name (Recipe) comes from App.js, sent to Sidebar and Mininavbar */
      name: PropTypes.string
   }

   handleShow(name, id) {
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
               // console.log("response.data[0] ", response.data[0])
               store.dispatch(getOneRecipeData(response.data[0]))
               const { oneRecipeData, username } = store.getState()
               const { addedBy } = oneRecipeData
               store.dispatch(allowedToModifySelection(addedBy === username))
            }
         })
         .catch((err) => console.log(err))
   }

   render(){

      const { name } = this.props
      const { allowedToModifySelection, oneRecipeData, chosenId } = store.getState()

      return(
         <div className="Recipe-main-container">
            <div className="Recipe-nav-container">
               <Sidebar name={name} select={this.handleShow} />
               <div className="Recipe-inner-container">
                  <Mininavbar name={name} chosenId={chosenId} allowedToModifySelection={allowedToModifySelection} />
                  <div>
                     {(chosenId !== "") && <RecipeShow data={oneRecipeData} />}
                  </div>
                  <div className="Recipe-cancel">
                     <CancelLink />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Recipe