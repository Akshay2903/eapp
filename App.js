import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from "./Components/CartContext";
import About from "./Components/Pages/About";
import Home from './Components/Pages/Home';
import Header, {NavBar} from "./Components/Header";
import ProductList from "./Components/ProductList";
import CartList from "./Components/CartList";
import {useState, useContext} from "react";
import "./App.css";

const App = () => {
  const [showCart,setShowCart] = useState(false);
  const { cart, addToCart} = useContext(Cart);

  const handleShow = (value) => {
    setShowCart(value)
  };

  return (
    <BrowserRouter>
      <NavBar handleShow={handleShow}/>
      <Header count={cart.length} handleShow={handleShow}/>
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart}/>} />
        <Route path="/cart" element={<CartList/>} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
