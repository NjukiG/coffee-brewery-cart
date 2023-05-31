import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { productsArray } from "../productsStore";

function Store() {
  console.log(productsArray);
  return (
    <div>
      <h1>Welcome to the Brewery!</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, index) => {
          return (
            <Col align="center" key={index} className="product-card">
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Store;
