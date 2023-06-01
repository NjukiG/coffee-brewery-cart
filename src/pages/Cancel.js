import React from "react";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div>
      <h1>We are sorry to see ypu cancel your order.</h1>
      <br />
      <h4>We hope to see you back!</h4>
      <br />
      <Link className="btn btn-outline-warning" to="/store">
        Back to Store
      </Link>
    </div>
  );
}

export default Cancel;
