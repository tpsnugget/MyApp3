import React from "react"
import PropTypes from "prop-types"
import "./TextArea.css"

export const TextArea = ({ rows, cols, label, placeholder, type, name, value, handleChange }) => {

   TextArea.propTypes = {
      /* Passed down from various Components */

      /* Used for css styling */
      className: PropTypes.string,

      /* Sizes the textarea container */
      rows: PropTypes.string,

      /* Sizes the textarea container */
      cols: PropTypes.string,

      /* label is what is displayed on top of the input box for the user */
      label: PropTypes.string,

      /* Placeholder displayed in the text area for the user */
      placeholder: PropTypes.string,

      /* Indicates the type of textarea */
      type: PropTypes.string,

      /* name is used for state */
      name: PropTypes.string,

      /* value is displayed from state for the user */
      value: PropTypes.string,

      /* function to pass data back to the parent's state */
      handleChange: PropTypes.func
   }

      return (
         <label className="TextArea-label"><span className="TextArea-span">{label}</span>
            <div>
               <textarea
                  className="TextArea-textarea"
                  rows={rows}
                  cols={cols}
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  value={value}
                  onChange={handleChange}
               >
               </textarea>
            </div>
         </label>
      )
}