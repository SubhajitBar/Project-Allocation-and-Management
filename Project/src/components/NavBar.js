import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';  
import logo from '../assets/img/logo.png';
import {
  Link
} from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }



  return (
    <Navbar className={scrolled ? "scrolled" : ""} bg="" variant="dark" expand="lg">
      {/* <Container> */}
      <div className="container-fluid px-2">

        <Navbar.Brand href="#home">
          <img src={logo} alt="" srcSet="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto list" style={{ letterSpacing: "2px" }}>
            <Nav.Link className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")} as={Link} to="/">Home</Nav.Link>
            <Nav.Link className={activeLink === "dashboard" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("dashboard")} as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link className={activeLink === "wishlist" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("wishlist")} as={Link} to="/wishlist">Wishlist</Nav.Link>
            <Nav.Link className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")} as={Link} to="/yourproj">Your Projects</Nav.Link>
            <Nav.Link className={activeLink === "signout" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("signout")} href="#signout">Sign Out</Nav.Link>
            <span className="navbar-text">

              <Button className="mx-2 " onClick={() => console.log("I am btn")} variant="light">Connect</Button>
            </span>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavBar