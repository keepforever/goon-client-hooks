import React from "react";
import Navbar from "./Navbar/Navbar";

export default ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>{children}</div>
    </React.Fragment>
  );
};
