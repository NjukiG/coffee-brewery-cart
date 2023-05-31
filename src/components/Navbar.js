import React, { useState } from "react";
import { Modal, Button, Container, Navbar } from "react-bootstrap";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
        <Container>
          <Navbar.Brand href="/">Shoppiez Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="success" onClick={handleShow}>
              Cart 10 Items
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>This is the contents of the modal</h1>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-warning" onClick={handleClose}>Close</Button>
      </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;
