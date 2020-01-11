import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./MainLandingImageButton.css"

export const MainLandingImageButton = ({ label, src }) => {

   MainLandingImageButton.propTypes = {
      /* Label for above the image, and for the alt attribute */
      label: PropTypes.string,
      /* image location */
      src: PropTypes.string
   }

      const path = `/${label}`

      return(
         <div className="Landing-button">
            <p className="Landing-title">{label}</p>
            <Link to={path}>
               <img
                  className="Landing-img"
                  src={src}
                  alt={label} />
            </Link>
         </div>
      )
}