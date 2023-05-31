import React from "react";
import { Button, Card } from "react-bootstrap";

function ProductCard({product}) {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="outline-primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
