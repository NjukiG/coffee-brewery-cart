import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-heading">Oops! Something went wrong.</h1>
      <p className="error-message">
        We apologize for the inconvenience. Please try again later.
      </p>
      <img
        src="https://www.impactbnd.com/hubfs/404-error-page-examples-best.jpg"
        alt="Error"
        className="error-image"
      />
      <br />
      

      <Link className="btn btn-outline-warning" to="/">Back Home</Link>
    </div>
  );
}

export default Error;
