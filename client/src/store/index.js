import { createStore } from "redux"
import reducer from "../reducers"

const initialState = {
   isLoggedIn: false,
   loggedInName: "",
   username: "",
   chosenId: "",
   oneBeerData: {},
   oneDestinationData: {},
   oneRecipeData: {},
   oneRestaurantData: {},
   oneRVData: {}
}
export const store = createStore(reducer, initialState)