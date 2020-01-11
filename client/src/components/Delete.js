import React, { Component } from "react"
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
               this.setState({
                  snackBarRedOpen: true,
                  msg: "Delete was not successfull"
               })
            } else {
               this.setState({
                  snackBarGreenOpen: true,
                  msg: "Delete was successful",
               })
               setTimeout(() => {
                  this.setState({
                     snackBarGreenOpen: false,
                     msg: "",
                     goodDelete: true
                  })
               }, 2500);
            }
         })
         .catch((err) => console.log(err))
   }

   render(){

      const { goodDelete, snackBarGreenOpen, snackBarRedOpen } = this.state
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