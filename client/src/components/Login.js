import React, { Component, Fragment } from "react"
import bcrypt from "bcryptjs"
import { Redirect } from "react-router-dom"
import { store } from "../store"
import { handleChange, loginUser, snackBarGreenOpen, snackBarRedOpen } from "../actions"
import { SnackbarGreen } from "./Atoms/SnackbarGreen/SnackbarGreen"
import { SnackbarRed } from "./Atoms/SnackbarRed/SnackbarRed"
import { InputText } from "./Atoms/InputText/InputText"
import { Button } from "./Atoms/Button/Button"
import axios from "axios"
import "../css/Login.css"

class Login extends Component {

   handleChange = (e) => {
      store.dispatch(handleChange(e))
   }

   handleSubmit = (e) => {
      e.preventDefault()

      const { password, username } = store.getState()

      axios.get("http://localhost:9000/users", {
         params: {
            username: username.toLowerCase()
         }
      })
         .then((response) => {
            if (response.data._id) {
               bcrypt.compare(password, response.data.password, function (err, res) {
                  if (res) {
                     store.dispatch(snackBarGreenOpen(true, "Login was successful"))
                     setTimeout(() => {
                        store.dispatch(loginUser(password, username.toLowerCase()))
   
                        store.dispatch(snackBarGreenOpen(false, ""))
                     }, 2000);
                  }
                  else {
                     store.dispatch(snackBarRedOpen(true, "Login not successful"))
                     setTimeout(() => {
                        store.dispatch(snackBarRedOpen(false, ""))
                     }, 2000);
                  }
               });
            }
            else if (response.data === "") {
               store.dispatch(snackBarRedOpen(true, "Login not successful"))
               setTimeout(() => {
                  store.dispatch(snackBarRedOpen(false, ""))
               }, 2000);
            }

         })
         .catch((error) => {
            console.error("Login Component received error: ", error)
         })
   }

   render() {

      const { goodLogin, msg, snackBarGreenOpen, snackBarRedOpen } = store.getState()

      return (
         <Fragment>
            {goodLogin && <Redirect to="/landing" />}
            <div className="Login">
               <div className="Login-header">
                  <h4 className="Login-header-h4">Login</h4>
               </div>
               <div className="Login-main-div">
                  <form action="" method="get" onSubmit={this.handleSubmit}>

                     <div className="Login-row">
                        <InputText type="text" label="Username:" name="username" placeholder="Username" handleChange={this.handleChange} />
                        <InputText type="password" label="Password:" name="password" placeholder="Password" handleChange={this.handleChange} />
                     </div>

                     <Button label="Submit" />
                  </form>
               </div>
            </div>
            {snackBarGreenOpen && <SnackbarGreen msg={msg} />}
            {snackBarRedOpen && <SnackbarRed msg={msg} />}
         </Fragment>
      )
   }
}

export default Login