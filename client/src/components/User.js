import React, { Component, Fragment } from "react"
import { store } from "../store"
import { handleEmailChange, handleFirstNameChange, handleLastNameChange, handlePasswordChange, 
   handlePassword2Change, handleUsernameChange, snackBarGreenOpen, snackBarRedOpen,
   updateUserInfo } from "../actions"
import { Redirect } from "react-router-dom"
import { SnackbarGreen } from "./Atoms/SnackbarGreen/SnackbarGreen"
import { SnackbarRed } from "./Atoms/SnackbarRed/SnackbarRed"
import { InputText } from "./Atoms/InputText/InputText"
import { Button } from "./Atoms/Button/Button"
import axios from "axios"
import "../css/User.css"

var goodSignUp = false

class User extends Component {

   handleEmailChange = (e) => {
      store.dispatch(handleEmailChange(e))
   }

   handleFirstNameChange = (e) => {
      store.dispatch(handleFirstNameChange(e))
   }

   handleLastNameChange = (e) => {
      store.dispatch(handleLastNameChange(e))
   }

   handlePasswordChange = (e) => {
      store.dispatch(handlePasswordChange(e))
   }

   handlePassword2Change = (e) => {
      store.dispatch(handlePassword2Change(e))
   }

   handleUsernameChange = (e) => {
      store.dispatch(handleUsernameChange(e))
   }

   handleSubmit = (e) => {
      e.preventDefault()
   
      const { email, first, last, password, password2, username } = store.getState()

      if (password === password2) {
         axios.post("http://localhost:9000/users", {
            first: first,
            last: last,
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: password
         })
            .then((response) => {
               console.log("User Component response: ", response)
               if (response.data._id) {
                  store.dispatch(snackBarGreenOpen(true, "Signup Successful"))
                  goodSignUp = true
                  setTimeout(() => {
                     store.dispatch(snackBarGreenOpen(false, ""))
                  }, 2000);
               }
               else if (response.data.name === "MongoError") {
                  store.dispatch(snackBarRedOpen(true, "Those login credentials are already in use"))
                  setTimeout(() => {
                     store.dispatch(snackBarRedOpen(false, ""))
                     store.dispatch(updateUserInfo("", "", "", "", "", ""))
                  }, 2000);
               }
               else if (response.data._message === "User validation failed") {
                  store.dispatch(snackBarRedOpen(true, "An error occurred during signup"))
                  setTimeout(() => {
                     store.dispatch(snackBarRedOpen(false, ""))
                     store.dispatch(updateUserInfo("", "", "", "", "", ""))
                  }, 2000);
               }
            })
            .catch((error) => {
               console.error("User Component error: ", error)
            })
      }
      else {
         store.dispatch(snackBarRedOpen(true, "Passwords entered are not identical"))
         setTimeout(() => {
            store.dispatch(snackBarRedOpen(false, ""))
            store.dispatch(updateUserInfo("", "", "", "", "", ""))
         }, 2000);
      }

   }

   render() {

      const { msg, snackBarGreenOpen, snackBarRedOpen } = store.getState()

      return (
         <Fragment>
            {goodSignUp && <Redirect to="/login" />}
            <div className="User">
               <div className="User-header">
                  <h4 className="User-header-h4">Signup</h4>
               </div>
               <div className="User-main-div">
                  <form onSubmit={this.handleSubmit}>

                     <div className="User-row">
                     <InputText type="text" label="First Name:" name="first" placeholder="First Name" handleChange={this.handleFirstNameChange} />
                     <InputText type="text" label="Last Name:" name="last" placeholder="Last Name" handleChange={this.handleLastNameChange} />
                     </div>

                     <div className="User-row">
                     <InputText type="text" label="Username:" name="username" placeholder="Username" handleChange={this.handleUsernameChange} />
                     <InputText type="email" label="Email:" name="email" placeholder="Email" handleChange={this.handleEmailChange} />
                     </div>

                     <div className="User-row">
                     <InputText type="password" label="Password:" name="password" placeholder="Password" handleChange={this.handlePasswordChange} />
                     <InputText type="password" label="Re-Enter Password:" name="password2" placeholder="Password" handleChange={this.handlePassword2Change} />
                     </div>
                     <Button label="Submit"/>
                  </form>
               </div>
            </div>
            {snackBarGreenOpen && <SnackbarGreen msg={msg} />}
            {snackBarRedOpen && <SnackbarRed msg={msg} />}
         </Fragment>
      )
   }
}

export default User