import React from 'react';
import ReactDOM from 'react-dom';
import { store } from "./store"
import './css/index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"

const render = () =>

ReactDOM.render(
      <Router>
         <App />
      </Router>
   , document.getElementById('root'));

render()

store.subscribe(render)