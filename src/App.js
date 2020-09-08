import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./page/homepage/homepage.component";
import "./page/homepage/homepage.styles.scss";
import ShopPage from "./page/shop/shop.component";
import HeaderComponent from "./components/header-component/header-component.component";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
