import React from "react";
import { Button } from "react-bootstrap";

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
      <br />

      <Button variant="outline-warning">Back Home</Button>
    </div>
  );
}

export default Error;
