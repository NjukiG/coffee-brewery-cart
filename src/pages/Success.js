import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <h1>Thank you for making a purchase with us.</h1>
      <br />
      <h4>We hope to see you back to shop with us again!</h4>
      <br />
      <Link className="btn btn-outline-warning" to="/store">Back to Store</Link>
    </div>
  );
}

export default Success;
