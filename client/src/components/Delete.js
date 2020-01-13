import React, { Component } from "react"
import { store } from "../store"
import { goodDelete, snackBarGreenOpen, snackBarRedOpen } from "../actions"
import { Redirect } from "react-router-dom"
import { SnackbarGreen } from "./Atoms/SnackbarGreen/SnackbarGreen"
import { SnackbarRed } from "./Atoms/SnackbarRed/SnackbarRed"
import axios from "axios"

class Delete extends Component{

   constructor(props){
      super(props)
      this.state = {
         snackBarGreenOpen: false,
         snackBarRedOpen: false,
         msg: "",
         goodDelete: false
      }
   }

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
               // this.setState({
               //    snackBarRedOpen: true,
               //    msg: "Delete was not successfull"
               // })
            } else {
               store.dispatch(snackBarGreenOpen(true, "Delete was successful"))
               // this.setState({
               //    snackBarGreenOpen: true,
               //    msg: "Delete was successful",
               // })
               setTimeout(() => {
                  store.dispatch(snackBarGreenOpen(false, ""))
                  store.dispatch(goodDelete())
                  // this.setState({
                  //    snackBarGreenOpen: false,
                  //    msg: "",
                  //    goodDelete: true
                  // })
               }, 2500);
            }
         })
         .catch((err) => console.log(err))
   }

   render(){

      const { snackBarGreenOpen, snackBarRedOpen } = this.state
      const { type } = this.props.location.state

      const path = `/${type.toLowerCase()}`
      
      return(
         <div>
            {goodDelete && <Redirect to={path} />}
            {snackBarGreenOpen && <SnackbarGreen msg={this.state.msg} />}
            {snackBarRedOpen && <SnackbarRed msg={this.state.msg} />}
         </div>
      )
   }
}

export default Delete