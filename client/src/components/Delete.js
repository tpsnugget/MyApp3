import React, { Component } from "react"
import { store } from "../store"
import { goodDelete, snackBarGreenOpen, snackBarRedOpen } from "../actions"
import { Redirect } from "react-router-dom"
import { SnackbarGreen } from "./Atoms/SnackbarGreen/SnackbarGreen"
import { SnackbarRed } from "./Atoms/SnackbarRed/SnackbarRed"
import axios from "axios"

class Delete extends Component{

   componentDidMount(){

      const { type, id } = this.props.location.state

      const url = `http://localhost:9000/${type.toLowerCase()}`

      axios.delete(url, {
         params: {
            _id: id
         }
      })
         .then((response) => {
            if (response.data.name === "MongoError") {
               store.dispatch(snackBarRedOpen(true, "Delete was not successfull"))
            } else {
               store.dispatch(snackBarGreenOpen(true, "Delete was successful"))
               setTimeout(() => {
                  store.dispatch(snackBarGreenOpen(false, ""))
                  store.dispatch(goodDelete())
                 }, 2500);
            }
         })
         .catch((err) => console.log(err))
   }

   render(){

      const { type } = this.props.location.state
      const { goodDelete, msg, snackBarGreenOpen, snackBarRedOpen } = store.getState()

      const path = `/${type.toLowerCase()}`
      
      return(
         <div>
            {goodDelete && <Redirect to={path} />}
            {snackBarGreenOpen && <SnackbarGreen msg={msg} />}
            {snackBarRedOpen && <SnackbarRed msg={msg} />}
         </div>
      )
   }
}

export default Delete