export function addBeerSuccessful(){
   return {
      type: "ADD_BEER_SUCCESSFUL"
   }
}

export function addDestinationSuccessful(){
   return {
      type: "ADD_DESTINATION_SUCCESSFUL"
   }
}

export function addRecipeSuccessful(){
   return {
      type: "ADD_RECIPE_SUCCESSFUL"
   }
}

export function addRestaurantSuccessful(){
   return {
      type: "ADD_RESTAURANT_SUCCESSFUL"
   }
}

export function addRVSuccessful(){
   return {
      type: "ADD_RV_SUCCESSFUL"
   }
}

export function allowedToModifySelection(e){
   return {
      type: "ALLOWED_TO_MODIFY_SELECTION",
      allowedToModifySelection: e
   }
}

export function chosenId(chosenId){
   return {
      type: "CHOSEN_ID",
      chosenId: chosenId
   }
}

export function editPath(editPath){
   return {
      type: "EDIT_PATH",
      editPath: editPath
   }
}

export function getBeerData(beerData){
   return {
      type: "GET_BEER_DATA",
      beerData: beerData
   }
}

export function getDestinationData(destinationData){
   return {
      type: "GET_DESTINATION_DATA",
      destinationData: destinationData
   }
}

export function getRecipeData(recipeData){
   return {
      type: "GET_RECIPE_DATA",
      recipeData: recipeData
   }
}

export function getRestaurantData(restaurantData){
   return {
      type: "GET_RESTAURANT_DATA",
      restaurantData: restaurantData
   }
}

export function getRVData(rvData){
   return {
      type: "GET_RV_DATA",
      rvData: rvData
   }
}

export function getOneBeerData(oneBeerData){
   return {
      type: "GET_ONE_BEER_DATA",
      oneBeerData: oneBeerData
   }
}

export function getOneDestinationData(oneDestinationData){
   return {
      type: "GET_ONE_DESTINATION_DATA",
      oneDestinationData: oneDestinationData
   }
}

export function getOneRecipeData(oneRecipeData){
   return {
      type: "GET_ONE_RECIPE_DATA",
      oneRecipeData: oneRecipeData
   }
}

export function getOneRestaurantData(oneRestaurantData){
   return {
      type: "GET_ONE_RESTAURANT_DATA",
      oneRestaurantData: oneRestaurantData
   }
}

export function getOneRVData(oneRVData){
   return {
      type: "GET_ONE_RV_DATA",
      oneRVData: oneRVData
   }
}

export function goodDelete(){
   return{
      type: "GOOD_DELETE"
   }
}

export function handleChange(e){
   return {
      type: "HANDLE_CHANGE",
      label: e.target.name,
      value: e.target.value
   }
}

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

export function newPath(newPath){
   return {
      type: "NEW_PATH",
      newPath: newPath
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