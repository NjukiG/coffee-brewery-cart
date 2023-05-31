import React from "react";
import { Modal, Button, Container, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
      <Container>
        <Navbar.Brand href="/">Shoppiez Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="success">Cart 10 Items</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
