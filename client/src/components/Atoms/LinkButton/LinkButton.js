import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./LinkButton.css"

export const LinkButton = ({ newPath, buttonLabel, name, chosenId }) => {

   LinkButton.defaultProps = {
      chosenId: ""
   }

   LinkButton.propTypes = {
      /* Passed down from Mininavbar */
      chosenId: PropTypes.string,

      /* label for the button face (left side of the text) */
      label: PropTypes.string,

      /* label for the button face (right side of the text) */
      /* Beer, Recipe, Restaurant, RV */
      name: PropTypes.string,

      /* path for the Link from react-router-dom */
      newPath: PropTypes.string
   }

   return (
      <div className="LinkButton-div">
         <Link
            to={{
               pathname: newPath,
               state: {
                  id: chosenId,
                  type: name
               }
            }}
            className="LinkButton-link-new"
         >
            {buttonLabel} {name}
         </Link>
      </div>
   )
}