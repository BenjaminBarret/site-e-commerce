import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              e-commerce
            </Link>
          </div>
          <div>
            <Link to="/cart">Panier
              {cartItems.length > 0 &&(
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Se connecter</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <footer className="row center">Tous droits réservés.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
