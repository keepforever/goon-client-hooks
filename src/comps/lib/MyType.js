import React from "react";
import Typography from "@material-ui/core/Typography";

export default (props) => {
  return (
    <Typography {...props}>
      {props.children}
    </Typography>
  );
};
