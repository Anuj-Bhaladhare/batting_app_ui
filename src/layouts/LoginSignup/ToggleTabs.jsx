// ToggleTabs.js
import React from 'react';
import { Nav } from 'react-bootstrap';

const ToggleTabs = ({ isLogin, setIsLogin }) => {
  return (
    <Nav variant="tabs" className="justify-content-center mb-3">
      <Nav.Item>
        <Nav.Link
          active={isLogin}
          onClick={() => setIsLogin(true)}
          style={{ color: isLogin ? '#fff' : '#999' }}
        >
          Log in
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          active={!isLogin}
          onClick={() => setIsLogin(false)}
          style={{ color: !isLogin ? '#fff' : '#999' }}
        >
          Sign up
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default ToggleTabs;
