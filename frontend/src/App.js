import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/products/Products.jsx';
import Signup from './components/signup/Signup.jsx';
import Cart from './components/cart/Cart.jsx';
import Header from './components/header/Header.jsx';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header cartItems={null} />
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

