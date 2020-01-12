import { createStore } from "redux"
import reducer from "../reducers"

const initialState = {
   chosenId: "",
   email: "",
   first: "",
   goodLogin: false,
   isLoggedIn: false,
   last: "",
   loggedInName: "",
   oneBeerData: {},
   oneDestinationData: {},
   oneRecipeData: {},
   oneRestaurantData: {},
   oneRVData: {},
   password: "",
   password2: "",
   username: ""
}
export const store = createStore(reducer, initialState)