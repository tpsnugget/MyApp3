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

export function handlePasswordChange(e){
   return {
      type: "HANDLE_PASSWORD_CHANGE",
      password: e.target.value
   }
}

export function handleUsernameChange(e){
   return {
      type: "HANDLE_USERNAME_CHANGE",
      username: e.target.value
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