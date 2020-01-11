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

      case "HANDLE_PASSWORD_CHANGE":
      // console.log("HANDLE_PASSWORD_CHANGE ", action.password)
      return {
         ...state,
         password: action.password
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
      // console.log("GET_BEER_DATA: ", action.beerData)
      return {
         ...state,
         oneBeerData: action.beerData
      }

      default:
      return state
   }
}