import React, { Component, Fragment } from "react"
import { Redirect } from "react-router-dom"
import { SnackbarGreen } from "./Atoms/SnackbarGreen/SnackbarGreen"
import { SnackbarRed } from "./Atoms/SnackbarRed/SnackbarRed"
import { InputText } from "./Atoms/InputText/InputText"
import { Button } from "./Atoms/Button/Button"
import axios from "axios"
import "../css/User.css"

class User extends Component {

   constructor(props) {
      super(props)
      this.state = {
         first: "",
         last: "",
         username: "",
         email: "",
         password: "",
         password2: "",
         snackBarGreenOpen: false,
         snackBarRedOpen: false,
         msg: "",
         goodLogin: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault()
      if (this.state.password === this.state.password2) {
         axios.post("http://localhost:9000/users", {
            first: this.state.first,
            last: this.state.last,
            username: this.state.username.toLowerCase(),
            email: this.state.email.toLowerCase(),
            password: this.state.password
         })
            .then((response) => {
               console.log("User Component response: ", response)
               if (response.data._id) {
                  this.setState({
                     snackBarGreenOpen: true,
                     msg: "Signup Successful"
                  })
                  setTimeout(() => {
                     this.setState({
                        snackBarGreenOpen: false,
                        msg: "",
                        goodLogin: true
                     })
                  }, 2000);
               }
               else if (response.data.name === "MongoError") {
                  this.setState({
                     snackBarRedOpen: true,
                     msg: "Those login credentials are already in use"
                  })
                  setTimeout(() => {
                     this.setState({
                        first: "",
                        last: "",
                        username: "",
                        email: "",
                        password: "",
                        password2: "",
                        snackBarRedOpen: false,
                        msg: ""
                     })
                  }, 2000);
               }
               else if (response.data._message === "User validation failed") {
                  this.setState({
                     snackBarRedOpen: true,
                     msg: "An error occurred during signup"
                  })
                  setTimeout(() => {
                     this.setState({
                        first: "",
                        last: "",
                        username: "",
                        email: "",
                        password: "",
                        password2: "",
                        snackBarRedOpen: false,
                        msg: ""
                     })
                  }, 2000);
               }
            })
            .catch((error) => {
               console.error("User Component error: ", error)
            })
      }
      else {
         this.setState({
            snackBarRedOpen: true,
            msg: "Passwords entered are not identical"
         })
         setTimeout(() => {
            this.setState({
               first: "",
               last: "",
               username: "",
               email: "",
               password: "",
               password2: "",
               snackBarRedOpen: false,
               msg: ""
            })
         }, 2000);
      }

   }

   render() {

      const { goodLogin, snackBarGreenOpen, snackBarRedOpen } = this.state

      return (
         <Fragment>
            {goodLogin && <Redirect to="/login" />}
            <div className="User">
               <div className="User-header">
                  <h4 className="User-header-h4">Signup</h4>
               </div>
               <div className="User-main-div">
                  <form onSubmit={this.handleSubmit}>

                     <div className="User-row">
                     <InputText type="text" label="First Name:" name="first" placeholder="First Name" handleChange={this.handleChange} />
                     <InputText type="text" label="Last Name:" name="last" placeholder="Last Name" handleChange={this.handleChange} />
                     </div>

                     <div className="User-row">
                     <InputText type="text" label="Username:" name="username" placeholder="Username" handleChange={this.handleChange} />
                     <InputText type="email" label="Email:" name="email" placeholder="Email" handleChange={this.handleChange} />
                     </div>

                     <div className="User-row">
                     <InputText type="password" label="Password:" name="password" placeholder="Password" handleChange={this.handleChange} />
                     <InputText type="password" label="Re-Enter Password:" name="password2" placeholder="Password" handleChange={this.handleChange} />
                     </div>
                     <Button label="Submit"/>
                  </form>
               </div>
            </div>
            {snackBarGreenOpen && <SnackbarGreen msg={this.state.msg} />}
            {snackBarRedOpen && <SnackbarRed msg={this.state.msg} />}
         </Fragment>
      )
   }
}

export default User