import { Fragment, useState, useContext} from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { BsCart3,  } from "react-icons/bs";
import CartContext from "../Store/CartContext";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const openCart = () => {          
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };
  const location = useLocation();
  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">

          <Nav>
            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink to="/home"  style={{ color: "white" }}>
               HOME   
              </NavLink>
            </Nav.Item>

            <Nav.Item
              style={{marginRight: "40px", }}>
              <NavLink to="/store" style={{ color: "white" }}>
              STORE
              </NavLink>
            </Nav.Item>

            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink to="/about" style={{ color: "white" }} onClick={() => props.handleShow(false)}>
                ABOUT
                </NavLink>
              </Nav.Item>

              <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink to="/contactUs" style={{ color: "white" }}>
              ContactUs
                </NavLink>
                
              </Nav.Item>
              <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink to="/auth" style={{ color: "white" }}>
              LogIn
                </NavLink>
              </Nav.Item>
          </Nav>
        </Container>
        {location.pathname !== "/" &&
          location.pathname !== "/about" &&
          location.pathname !== "/contact_us" &&
          location.pathname !== "/auth" && (
        <Button
          variant="outline-primary"
          style={{
            marginRight: "15px",
            backgroundColor: "transparent",
            borderColor: "#007bff",
            color: "white",
          }}
          onClick={openCart}
        >
          Cart <BsCart3 />
          {numberOfCartItems}
        </Button>
        )}
      </Navbar>
     
      {showCart && <Cart onClose={closeCart} />}
      
    </Fragment>
  );
};
export default Header;