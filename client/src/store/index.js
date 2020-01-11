import { createStore } from "redux"
import reducer from "../reducers"

const initialState = {
   isLoggedIn: false,
   loggedInName: "",
   username: "",
   chosenId: ""
}
export const store = createStore(reducer, initialState)