import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { getProductData } from "../productsStore";
import {AiFillDelete} from "react-icons/ai"

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  return (
    <>
      <span className="cartitem">
        <img
          src={productData.image}
          className="cartItemImg"
          alt={productData.name}
        />
        <div className="cartItemDetail">
          <span>{productData.title}</span>

          <span>KES: {productData.price}</span>
          <span>Quantity {quantity}</span>
        </div>

        <Button
          variant="danger"
          size="sm"
          onClick={() => cart.deleteFromCart(id)}
        >
          <AiFillDelete fontSize="20px" />
        </Button>
        <hr />
      </span>
    </>
  );
}

export default CartProduct;
