import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/HomePage.jsx";
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shopPage/shopPage';
import LoginPage from './pages/loginPage/LoginPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/shop"} component={ShopPage} />
        <Route path={"/login"} component={LoginPage} />
      </Switch>
    </div>
  );
}

export default  App ;
