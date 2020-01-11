import React from "react"
import PropTypes from "prop-types"
import "./SnackbarRed.css"

export const SnackbarRed = ( { msg }) => {

   SnackbarRed.propTypes = {
      /* Passed down from various Components, this is the message displayed
         to the user */
      msg: PropTypes.string
   }

      return(
         <div className="SnackbarRed">
            <p className="SnackbarRed-p">{msg}</p>
         </div>
      )
}