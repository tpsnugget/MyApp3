export function loginUser(password, username){
   return {
      type: "LOGIN_USER",
      password: password,
      username: username
   }
}

export function logoutUser(){
   return {
      type: "LOGOUT_USER"
   }
}

export function updateUserInfo(first, last, username, email, password, password2){
   return {
   type: "UPDATE_USER_INFO",
   first: first,
   last: last,
   username: username,
   email: email,
   password: password,
   password2: password2
   }
}

export function handleEmailChange(e){
   return {
      type: "HANDLE_EMAIL_CHANGE",
      email: e.target.value
   }
}

export function handleFirstNameChange(e){
   return {
      type: "HANDLE_FIRST_NAME_CHANGE",
      first: e.target.value
   }
}

export function handleLastNameChange(e){
   return {
      type: "HANDLE_LAST_NAME_CHANGE",
      last: e.target.value
   }
}

export function handlePasswordChange(e){
   return {
      type: "HANDLE_PASSWORD_CHANGE",
      password: e.target.value
   }
}

export function handlePassword2Change(e){
   return {
      type: "HANDLE_PASSWORD2_CHANGE",
      password2: e.target.value
   }
}

// To delete
export function handleUsernameChange(e){
   console.log("handleChange e.target.name", e.target.name)
   return {
      type: "HANDLE_CHANGE",
      [e.target.name]: e.target.value,
      name: [e.target.name]
   }
}

// To keep
export function handleChange(e){
   return {
      type: "HANDLE_CHANGE",
      label: e.target.name,
      value: e.target.value
   }
}

export function snackBarGreenOpen(open, msg){
   return {
      type: "SNACK_BAR_GREEN_OPEN",
      snackBarGreenOpen: open,
      msg: msg
   }
}

export function snackBarRedOpen(open, msg){
   return {
      type: "SNACK_BAR_RED_OPEN",
      snackBarRedOpen: open,
      msg: msg
   }
}

export function chosenId(chosenId){
   return {
      type: "CHOSEN_ID",
      chosenId: chosenId
   }
}

export function getBeerData(beerData){
   return {
      type: "GET_BEER_DATA",
      beerData: beerData
   }
}

export function getOneBeerData(oneBeerData){
   return {
      type: "GET_ONE_BEER_DATA",
      oneBeerData: oneBeerData
   }
}

export function getDestinationData(destinationData){
   return {
      type: "GET_DESTINATION_DATA",
      destinationData: destinationData
   }
}

export function getOneDestinationData(oneDestinationData){
   return {
      type: "GET_ONE_DESTINATION_DATA",
      oneDestinationData: oneDestinationData
   }
}

export function getRecipeData(recipeData){
   return {
      type: "GET_RECIPE_DATA",
      recipeData: recipeData
   }
}

export function getOneRecipeData(oneRecipeData){
   return {
      type: "GET_ONE_RECIPE_DATA",
      oneRecipeData: oneRecipeData
   }
}

export function getRestaurantData(restaurantData){
   return {
      type: "GET_RESTAURANT_DATA",
      restaurantData: restaurantData
   }
}

export function getOneRestaurantData(oneRestaurantData){
   return {
      type: "GET_ONE_RESTAURANT_DATA",
      oneRestaurantData: oneRestaurantData
   }
}

export function getRVData(rvData){
   return {
      type: "GET_RV_DATA",
      rvData: rvData
   }
}

export function getOneRVData(oneRVData){
   return {
      type: "GET_ONE_RV_DATA",
      oneRVData: oneRVData
   }
}