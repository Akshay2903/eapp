import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";
import CartProvider from "./Component/Store/CartProvider";
import HOME from "./Pages/Home";
import ABOUT from "./Pages/About";
import STORE from "./Pages/STORE";
import ContactUs from "./Pages/ContactUs";
import {  Routes ,Route } from 'react-router-dom';


function App() {
return (
<CartProvider>
      <Header />
          <Routes>
          <Route path="/home" element={<HOME/>} />
          <Route path="/store" element={<STORE/>} />
          <Route path="/about" element={<ABOUT/>} />
          <Route path="/contactUs" element={<ContactUs/>}/>
          </Routes>
         
        <Footer />
 </CartProvider> 
  );
};
export default App;
