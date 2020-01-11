import React from "react"
import PropTypes from "prop-types"
import { LinkButton } from "./Atoms/LinkButton/LinkButton"
import "../css/Mininavbar.css"

export const Mininavbar = ({ allowedToModifySelection, chosenId, name }) => {

   Mininavbar.propTypes = {
      /* Passed down from one of the four main landing pages. Used to complete
         the path, and used on part of the button face on the LinkButton Atom.
         name options are Beer, Recipe, Restaurant, RV. */
      name: PropTypes.string,

      /* Passed down from one of the four main landing pages.
         Use to customize the Mininavbar. This is _id from the db. */
      chosenId: PropTypes.string,

      /* Passed down from one of the four main landing pages.
         Used to customize the Mininavbar. Only the user who entered the data
         is allowed to Edit / Delete the data. */
      allowedToModifySelection: PropTypes.bool
   }

      const newPath = `/${name.toLowerCase()}/new`
      const editPath = `/${name.toLowerCase()}/edit`

      return (
         <div className="Mininavbar-main-container">

            <LinkButton newPath={newPath} name={name} buttonLabel="Add New" />
            {allowedToModifySelection && <LinkButton buttonLabel="Edit" chosenId={chosenId} newPath={editPath} name={name} />}
            {allowedToModifySelection && <LinkButton buttonLabel="Delete" chosenId={chosenId} newPath="/delete" name={name} />}

         </div>
      )
   }