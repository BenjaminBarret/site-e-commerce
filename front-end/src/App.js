import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              e-commerce
            </a>
          </div>
          <div>
            <a href="/cart">Panier</a>
            <a href="/signin">Se connecter</a>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}/>
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/" component={HomeScreen} exact/>
        </main>
        <footer className="row center">Tous droits réservés.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
