import React from "react"
import { Link } from "react-router-dom"
import { store } from "../store"
import { logoutUser } from "../actions"
import PropTypes from "prop-types"
import "../css/Navbar.css"

export const Navbar = ({ logout }) => {

   Navbar.propTypes = {
      /* Function passed down from App.js, used in the customized Navbar to
         log a person out if they are logged in */
      logout: PropTypes.func
   }

   const { isLoggedIn, username } = store.getState()

   const loginSignupLinks =
      <div className="Navbar-right">
         <Link to="/login" className="Navbar-right-links">Login</Link>
         <Link to="/user" className="Navbar-right-links">Signup</Link>
      </div>

   const logoutLink =
      <div className="Navbar-right">
         <Link to="/" className="Navbar-right-links" onClick={logout}>Logout</Link>
      </div>

   return (
      <div className="Navbar">
         <div className="Navbar-left">
            {isLoggedIn ? <span>You are logged in as: {username} </span> : <span>Please Login or Signup</span>}
         </div>
         {isLoggedIn ? logoutLink : loginSignupLinks}
      </div >
   )
}

store.dispatch(logoutUser())