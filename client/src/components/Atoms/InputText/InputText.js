import React from "react"
import PropTypes from "prop-types"
import "./InputText.css"

export const InputText = ({ label, name, placeholder, type, value, handleChange }) => {

   InputText.propTypes = {
      /* Passed down from New / Edit Components */

      /* label is what is displayed on top of the input box for the user */
      label: PropTypes.string,

      /* name is from the Parent state */
      name: PropTypes.string,

      /* placeholder is what is displayed inside of the textarea input box for the user */
      placeholder: PropTypes.string,

      /* input type = text, password, ... */
      type: PropTypes.string,

      /* Show value currently stored in that field that was pulled from the db */
      value: PropTypes.string,

      /* Changes the state in the Parent Component */
      handleChange: PropTypes.func
   }

      return (
         <label className="InputText-label"><span className="InputText-span">{label}</span>
            <div>
               <input
                  className="InputText-input"
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={value}
                  onChange={handleChange}
               />
            </div>
         </label>
      )
}

