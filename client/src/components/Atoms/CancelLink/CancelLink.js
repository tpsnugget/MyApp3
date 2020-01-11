import React from "react"
import { Link } from "react-router-dom"
import "./CancelLink.css"

export const CancelLink = () => {

      return (
         <div className="CancelLink-div">
            <Link to="/landing" className="CancelLink-link">
               <button className="CancelLink-button">
                  Cancel
               </button>
            </Link>
         </div>
      )
}