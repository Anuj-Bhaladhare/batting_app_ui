import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  Button,
  Input,
  InputGroup,
  InputGroupText,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/materialprowhite.svg";
import "./Header.css"; // Import the custom CSS

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" className="custom-navbar">
      <NavbarBrand href="/" className="logo-section d-flex align-items-center">
        <LogoWhite className="navbar-logo" />
        <span className="company-name">Company</span>
      </NavbarBrand>

      {/* Navbar Toggler for Mobile View */}
      <NavbarToggler onClick={toggle} className="me-2" />

      <Collapse isOpen={isOpen} navbar>
        <div className="d-flex align-items-center w-100 justify-content-between">
          {/* Date and Time */}
          <span className="navbar-date d-none d-md-block ms-3">
            {currentTime.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </span>

          {/* Centered Search Bar */}
          <InputGroup className="search-bar mx-auto">
            <Input type="text" placeholder="Search" className="search-input" />
            <InputGroupText className="search-icon">
              <i className="bi bi-search"></i>
            </InputGroupText>
          </InputGroup>

          {/* Signup and Login Buttons */}
          <div className="auth-buttons d-none d-md-flex align-items-center">
            <Button color="primary" className="me-2 signup-button">
              Sign up
            </Button>
            <Button color="primary" className="me-2 signup-button">
              Login
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
