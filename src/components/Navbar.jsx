import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const { cartItemIds } = useSelector((state) => state.cart);
  return (
    <div className="Navbar ">
      <Navbar bg="dark" expand="lg">
        <Container className="container ">
          <Navbar.Brand href="/">
            <strong className="text-white display-1">
              <span className="Lamina">Lamina's</span> Bakes
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="text-light ">
                Home
              </Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.4">
                  Menu (coming up soon!)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Link to="/cart" className="cartCtn">
          <ShoppingCartOutlinedIcon />
          {cartItemIds.length}
        </Link>
      </Navbar>
    </div>
  );
}

export default NavBar;
