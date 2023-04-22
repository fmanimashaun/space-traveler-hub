import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LOGO from 'assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      document.title = 'Rockets | Space Travelers\'s Hub';
    } else if (currentPath === '/missions') {
      document.title = 'Missions | Space Travelers\'s Hub';
    } else if (currentPath === '/my-profile') {
      document.title = 'My Profiles | Space Travelers\'s Hub';
    }
  }, [location]);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <img
            alt=""
            src={LOGO}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' '}
          Space Travelers&apos; Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => navigate('/')}
            >
              Rockets
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="missions"
              onClick={() => navigate('mission')}
            >
              Missions
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="my-profile"
              onClick={() => navigate('my-profile')}
            >
              My Profiles
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
