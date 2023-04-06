import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  console.log("error");
  return (
    <div>
      <div>
        <h1 style={{ color: "red" }}>404 Error</h1>
        <h1>Page Not Found</h1>
      </div>
      <div>
        <button className="listButton">
          <NavLink to="/">Back to Home</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Error;
