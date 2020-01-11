import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

export const Button = ({ label }) => {

   Button.propTypes = {
      /* Text used for the face of the button */
      label: PropTypes.string
   }

      return(
         <button className="Button-button">{label}</button>
      )
}