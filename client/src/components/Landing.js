/* MAIN LANDING PAGE */

import React, { Component } from "react"
import { store } from "../store"
import { allowedToModifySelection,chosenId } from "../actions"
import { MainLandingImageButton } from "./Atoms/MainLandingImageButton/MainLandingImageButton"
import "../css/Landing.css"

class Landing extends Component{

   componentDidMount(){
      store.dispatch(allowedToModifySelection(false))
      store.dispatch(chosenId(""))
   }

   render(){

      return (
         <div className="Landing-main-container">
            <div className="Landing-img-row">

               <MainLandingImageButton
                  label="Beer"
                  src="https://images.unsplash.com/photo-1571527036651-5860024b2351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
               />
               <MainLandingImageButton
                  label="Destination"
                  src="https://images.unsplash.com/photo-1566760728319-20b86d2b419e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
               />

            </div>

            <div className="Landing-img-row">

               <MainLandingImageButton
                  label="Recipe"
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
               />
               <MainLandingImageButton
                  label="Restaurant"
                  src="https://images.unsplash.com/photo-1489528792647-46ec39027556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
               />
               <MainLandingImageButton
                  label="RV"
                  src="https://images.unsplash.com/photo-1536483229849-71255a26bbd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
               />

            </div>
         </div>
      )
   }
}

export default Landing