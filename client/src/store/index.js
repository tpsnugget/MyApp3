import { createStore } from "redux"
import reducer from "../reducers"

const initialState = {
   abv: "",
   addBeerSuccessful: false,
   addedBy: "",
   beerColor: "",
   beerType: "",
   brewery: "",
   chosenId: "",
   city: "",
   email: "",
   first: "",
   glassware: "",
   goodDelete: false,
   goodLogin: false,
   ibu: "",
   image: "",
   isLoggedIn: false,
   last: "",
   latitude: "",
   loggedInName: "",
   longitude: "",
   name: "",
   notes: "",
   oneBeerData: {},
   oneDestinationData: {},
   oneRecipeData: {},
   oneRestaurantData: {},
   oneRVData: {},
   password: "",
   password2: "",
   phone: "",
   rating: "",
   state: "",
   streetAddress: "",
   username: "",
   website: "",
   zip: ""
}
export const store = createStore(reducer, initialState)