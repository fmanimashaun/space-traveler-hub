import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import LOGO from 'assets/images/logo.png';
import Styles from 'assets/scss/header.module.scss';

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
    <header className={Styles.header}>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand className="d-flex gap-3 align-items-center">
          <img
            alt=""
            src={LOGO}
            width="70"
            height="70"
            className="d-inline-block align-top"
          />
          <h1 className={`mb-0 ${Styles.header__logo}`}>Space Travelers&apos; Hub</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`ms-auto ${Styles.header__links}`}>
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={() => navigate('/')}
            >
              Rockets
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="missions"
              onClick={() => navigate('mission')}
            >
              Missions
            </Nav.Link>
            <Nav.Link
              as={NavLink}
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
