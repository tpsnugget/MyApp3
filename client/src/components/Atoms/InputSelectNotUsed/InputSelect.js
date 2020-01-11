import React, { Component } from "react"
import PropTypes from "prop-types"
import "./InputSelect.css"

class InputSelect extends Component {

   static propTypes = {
      /* Used for CSS styling */
      className: PropTypes.string,

      /* Used for CSS styling */
      inputClassName: PropTypes.string,

      /* label is what is displayed on top of the input box for the user */
      label: PropTypes.string,

      /* name is from the Parent state */
      name: PropTypes.string,

      /* options are for the select type input */
      options: PropTypes.object,

      /* Used for CSS styling */
      spanClassName: PropTypes.string,

      /* input type = text, password, ... */
      type: PropTypes.string,
   }

   constructor(props) {
      super(props)
      this.handleChangeHere = this.handleChangeHere.bind(this)
   }

   handleChangeHere(e) {
      e.preventDefault()
      this.props.handleChange(e)
   }

   render() {

      const { className, inputClassName, label, name, options, spanClassName, type } = this.props

      // const Options = options.map((option) => {
      //    console.log("option: ", option)
      //    return option
      // })

      return (
         <label className={className}><span className={spanClassName}>{label}</span>
            <div>
               <select
                  type={type}
                  name={name}
                  className={inputClassName}
                  onChange={this.handleChangeHere}
               >
               </select>
            </div>
         </label>
      )
   }
}

export default InputSelect