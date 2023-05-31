import React, { useState, useContext } from "react";
import { Modal, Button, Container, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../CartContext";

function NavBar() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const productsCount = cart.items.reduce((accumulator, product) => {
    return accumulator + product.quantity;
  }, 0);

  console.log(productsCount);

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
        <Container>
          <Navbar.Brand href="/">Shoppiez Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="success" onClick={handleShow}>
              <AiOutlineShoppingCart fontSize="25px" /> {productsCount} Items
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
            My Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <h4>Items in your CArt!</h4>
              {cart.items.map((currentProduct, index) => {
                return <h3>{currentProduct.title}</h3>;
              })}
              <h2>Total: {cart.getTotalCost().toFixed(2)}</h2>
              <Button variant="success">Proceed to Checkout.</Button>
            </>
          ) : (
            <>
              <h3>You dont have items in your cart.</h3>{" "}
              <h4>Visit our products page to add items to your cart!</h4>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBar;
