import {useState, useContext} from "react";
import "./App.css";
import Header, {NavBar} from "./Components/Header";
import ProductList from "./Components/ProductList";
import CartList from "./Components/CartList";
import { Cart } from "./Components/CartContext";



const App = ()  => {
  const [showCart,setShowCart] = useState(false);

  const { cart, addToCart} = useContext(Cart);

  
const handleShow = (value) => {
  setShowCart(value)
};

  return (
    <div>
      <NavBar handleShow={handleShow}/>
      <Header count={cart.length} handleShow={handleShow}/>
      {
        showCart ? 
        <CartList/> :
        <ProductList addToCart={addToCart}/>

      }
      
    </div>
  );
}

export default App;