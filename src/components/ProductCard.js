import React, { useContext } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { CartContext } from "../CartContext";
import {
  BsPlusSquareFill,
  BsPatchMinusFill,

} from "react-icons/bs";

function ProductCard({ product }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  //   console.log(cart.items);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>{product.ingredients.map((ingredient) => {
          return <span>{ingredient}, </span>
        })}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form>
              <Form.Label column="true" sm="6">
                <strong className="price-text">{productQuantity}</strong> Items
                in Cart
              </Form.Label>
              <Col sm="6">
                <Button
                  onClick={() => cart.removeOneFromCart(product.id)}
                  variant="outline-danger"
                  className="mx-2"
                  sm="6"
                >
                  <BsPatchMinusFill fontSize="20px" />
                </Button>
                <Button
                  onClick={() => cart.addOneToCart(product.id)}
                  variant="outline-success"
                  className="mx-2"
                  sm="6"
                >
                  <BsPlusSquareFill fontSize="20px" />
                </Button>
              </Col>
            </Form>
            <Button
              onClick={() => cart.deleteFromCart(product.id)}
              variant="danger"
              className="my-2"
            >
              Remove All
            </Button>
          </>
        ) : (
          <Button
            variant="outline-success"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
