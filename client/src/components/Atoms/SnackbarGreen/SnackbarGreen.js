import React from "react"
import PropTypes from "prop-types"
import "./SnackbarGreen.css"

export const SnackbarGreen = ({ msg }) => {

   SnackbarGreen.propTypes = {
      /* Passed down from various Components, this is the message displayed
         to the user */
      msg: PropTypes.string
   }

      return(
         <div className="SnackbarGreen">
            <p className="SnackbarGreen-p">{msg}</p>
         </div>
      )
}