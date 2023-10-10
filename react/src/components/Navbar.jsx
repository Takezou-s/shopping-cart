import BNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <BNavbar expand="lg">
      <Container>
        <BNavbar.Toggle className="" aria-controls="navbar-nav" />
        <BNavbar.Collapse id="navbar-nav">
          <Nav className="w-100 justify-content-between">
            <NavDropdown title="Mouse Pad">
              <Link className="dropdown-item">Beam S</Link>
              <Link className="dropdown-item">Beam XL</Link>
              <Link className="dropdown-item">Wild</Link>
              <Link className="dropdown-item">Beam Soft</Link>
            </NavDropdown>
            <Link className="nav-link">Kupa Bardak</Link>
            <NavDropdown title="Patch & Yama">
              <Link className="dropdown-item">Patch</Link>
              <Link className="dropdown-item">Back Patch</Link>
            </NavDropdown>
            <NavDropdown title="Gamer Yastık">
              <Link className="dropdown-item">Suni Deri</Link>
              <Link className="dropdown-item">Baskılı</Link>
            </NavDropdown>
            <Link className="nav-link">Kulaklık Standı</Link>
            <Link className="nav-link">Ahşap Poster</Link>
            <Link className="nav-link">Kendin Tasarla</Link>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;
