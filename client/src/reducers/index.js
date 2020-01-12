export default (state, action) => {

   switch(action.type){
      case "LOGIN_USER":
      return {
         ...state,
         password: action.password,
         username: action.username,
         isLoggedIn: true,
         goodLogin: true
      }

      case "LOGOUT_USER":
      return {
         ...state,
         username: "",
         isLoggedIn: false
      }

      case "UPDATE_USER_INFO":
      return {
         first: action.first,
         last: action.last,
         username: action.username,
         email: action.email,
         password: action.password,
         password2: action.password2,
         goodSignUp: true
      }

      case "HANDLE_EMAIL_CHANGE":
      // console.log("HANDLE_EMAIL_CHANGE ", action.email)
      return {
         ...state,
         email: action.email
      }

      case "HANDLE_FIRST_NAME_CHANGE":
      // console.log("HANDLE_FIRST_NAME_CHANGE ", action.first)
      return {
         ...state,
         first: action.first
      }

      case "HANDLE_LAST_NAME_CHANGE":
      // console.log("HANDLE_LAST_NAME_CHANGE ", action.last)
      return {
         ...state,
         last: action.last
      }

      case "HANDLE_PASSWORD_CHANGE":
      // console.log("HANDLE_PASSWORD_CHANGE ", action.password)
      return {
         ...state,
         password: action.password
      }

      case "HANDLE_PASSWORD2_CHANGE":
      // console.log("HANDLE_PASSWORD2_CHANGE ", action.password2)
      return {
         ...state,
         password2: action.password2
      }

      case "HANDLE_USERNAME_CHANGE":
      // console.log("HANDLE_USERNAME_CHANGE ", action.username)
      return {
         ...state,
         username: action.username
      }

      case "SNACK_BAR_GREEN_OPEN":
      // console.log("SNACK_BAR_GREEN_OPEN ", action)
      return {
         ...state,
         snackBarGreenOpen: action.snackBarGreenOpen,
         msg: action.msg
      }

      case "SNACK_BAR_RED_OPEN":
      return {
         ...state,
         snackBarRedOpen: action.snackBarRedOpen,
         msg: action.msg
      }

      case "CHOSEN_ID":
      return {
         ...state,
         chosenId: action.chosenId
      }

      case "GET_BEER_DATA":
      // console.log("GET_BEER_DATA: ", action.beerData)
      return {
         ...state,
         beerData: action.beerData
      }

      case "GET_ONE_BEER_DATA":
      // console.log("GET_ONE_BEER_DATA: ", action.oneBeerData)
      return {
         ...state,
         oneBeerData: action.oneBeerData
      }

      case "GET_DESTINATION_DATA":
      // console.log("GET_DESTINATION_DATA: ", action.destinationData)
      return {
         ...state,
         destinationData: action.destinationData
      }

      case "GET_ONE_DESTINATION_DATA":
      // console.log("GET_ONE_DESTINATION_DATA: ", action.oneDestinationData)
      return {
         ...state,
         oneDestinationData: action.oneDestinationData
      }

      case "GET_RECIPE_DATA":
      // console.log("GET_RECIPE_DATA: ", action.recipeData)
      return {
         ...state,
         recipeData: action.recipeData
      }

      case "GET_ONE_RECIPE_DATA":
      // console.log("GET_ONE_RECIPE_DATA: ", action.oneRecipeData)
      return {
         ...state,
         oneRecipeData: action.oneRecipeData
      }

      case "GET_RESTAURANT_DATA":
      // console.log("GET_RESTAURANT_DATA: ", action.restaurantData)
      return {
         ...state,
         restaurantData: action.restaurantData
      }

      case "GET_ONE_RESTAURANT_DATA":
      // console.log("GET_ONE_RESTAURANT_DATA: ", action.oneRestaurantData)
      return {
         ...state,
         oneRestaurantData: action.oneRestaurantData
      }

      case "GET_RV_DATA":
      // console.log("GET_RV_DATA: ", action.rvData)
      return {
         ...state,
         rvData: action.rvData
      }

      case "GET_ONE_RV_DATA":
      // console.log("GET_ONE_RV_DATA: ", action.oneRVData)
      return {
         ...state,
         oneRVData: action.oneRVData
      }

      default:
      return state
   }
}