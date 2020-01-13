import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import { store } from "./store"
import { logoutUser } from "./actions"
import { Navbar } from "./components/Navbar"
import { Landing } from "./components/Landing"
import User from "./components/User"
import Login from "./components/Login"
import Delete from "./components/Delete"
import { NotLoggedInPage } from "./components/NotLoggedInPage"
import Beer from "./components/sections/beer/components/Beer"
import BeerNew from "./components/sections/beer/components/BeerNew"
import BeerEdit from "./components/sections/beer/components/BeerEdit"
import Destination from "./components/sections/destination/components/Destination"
import DestinationNew from "./components/sections/destination/components/DestinationNew"
import DestinationEdit from "./components/sections/destination/components/DestinationEdit"
import Recipe from "./components/sections/recipe/components/Recipe"
import RecipeNew from "./components/sections/recipe/components/RecipeNew"
import RecipeEdit from "./components/sections/recipe/components/RecipeEdit"
import Restaurant from "./components/sections/restaurant/components/Restaurant"
import RestaurantNew from "./components/sections/restaurant/components/RestaurantNew"
import RestaurantEdit from "./components/sections/restaurant/components/RestaurantEdit"
import RV from "./components/sections/rv/components/RV"
import RVNew from "./components/sections/rv/components/RVNew"
import RVEdit from "./components/sections/rv/components/RVEdit"
import './css/App.css';

class App extends Component {
  
  logout = () => {
    store.dispatch(logoutUser())
  }

  render() {

    const { username, isLoggedIn } = store.getState()

    return (
      <div className="App">
        <Navbar username={username} logout={this.logout} />
        <Switch>

          <Route exact path="/">
            <NotLoggedInPage />
          </Route>
          <Route exact path="/landing">
            {isLoggedIn && <Landing />}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/delete" component={Delete}>
          </Route>


          <Route exact path="/beer">
            {isLoggedIn && <Beer name="Beer" />}
          </Route>
          <Route exact path="/beer/new">
            {isLoggedIn && <BeerNew username={username} />}
          </Route>
          <Route exact path="/beer/edit" component={BeerEdit}>
          </Route>


          <Route exact path="/destination">
            {isLoggedIn && <Destination name="Destination" username={username} />}
          </Route>
          <Route exact path="/destination/new">
            {isLoggedIn && <DestinationNew username={username} />}
          </Route>Ï
          <Route exact path="/destination/edit" component={DestinationEdit}>
          </Route>Ï


          <Route exact path="/recipe">
            {isLoggedIn && <Recipe name="Recipe" username={username} />}
          </Route>
          <Route exact path="/recipe/new">
            {isLoggedIn && <RecipeNew username={username} />}
          </Route>
          <Route exact path="/recipe/edit" component={RecipeEdit}>
          </Route>


          <Route exact path="/restaurant">
            {isLoggedIn && <Restaurant name="Restaurant" username={username} />}
          </Route>
          <Route exact path="/restaurant/new">
            {isLoggedIn && <RestaurantNew username={username} />}
          </Route>
          <Route exact path="/restaurant/edit" component={RestaurantEdit}>
          </Route>


          <Route exact path="/rv">
            {isLoggedIn && <RV name="RV" username={username} />}
          </Route>
          <Route exact path="/rv/new">
            {isLoggedIn && <RVNew username={username} />}
          </Route>
          <Route exact path="/rv/edit" component={RVEdit}>
          </Route>

        </Switch>

      </div>
    );
  }
}

export default App;
