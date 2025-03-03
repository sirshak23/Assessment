import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, isLoggedIn } from '../utils/auth';
import { StyledHeader, Nav, Container } from './StyledComponents';

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <StyledHeader>
      <Container>
        <h1>Memory Showcase</h1>
        <Nav>
          <Link to="/">Home</Link>
          {!isLoggedIn() ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          ) : (
            <>
              <Link to="/profile">Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;