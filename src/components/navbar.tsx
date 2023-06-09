import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";
import logo from "/images/logo.png";

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <img src={logo} className="logo"></img>
                <div className="logo-name">
                    Digital Depot
                    </div> | 
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="https://github.com/BrandonLombard/digital-depot-react-shop/blob/main/README.md#digital-depot-react-shop" as={NavLink}>
                        About
                    </Nav.Link>
                    
                </Nav>
                <input type="text" className="form-control" id="search-box"></input>
                <Button 
                onClick={openCart}
                style={{ width: "3rem", height: "3rem", position: "relative"}}
                variant="outline-primary"
                className="rounded-circle"
                >
                {cartQuantity > 0 && (
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                }}>
                    {cartQuantity}
                </div>)}
                
                </Button>
            </Container>
            
        </NavbarBs>
    )
}