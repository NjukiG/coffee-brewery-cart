import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { productsArray } from "../productsStore";

function Store() {
  console.log(productsArray);
  return (
    <div>
      <h1>Welcome to SHoppiez Store!</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, index) => {
          return (
            <Col align="center" key={index} className="product-card">
                <Image src={product.image} className="product-image"/>
              <h3>{product.title}</h3>
        
              <h5>{product.price}</h5>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Store;
