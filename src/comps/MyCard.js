import React, { useState, Suspense } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Fallback from "./lib/Fallback";
import Login from "./Login";
import Signup from "./Signup";

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 700,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const [isLogin, setToggle] = useState(true);

  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h3">
          Auth
        </Typography>
        <Suspense fallback={<Fallback />}>
          {isLogin ? <Login {...props} /> : <Signup {...props} />}
        </Suspense>
      </CardContent>
      <CardActions>
        <div onClick={() => setToggle(!isLogin)}>
          <Button size="small">{isLogin ? "Signup" : "Login"}</Button>
        </div>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(SimpleCard);
