import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMutation } from "react-apollo-hooks";
// graphql
import LOGIN_MUTATION from "../../graphql/m/LOGIN_MUTATION";

export default props => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const myLoginMutation = useMutation(LOGIN_MUTATION, {
    update: (_, res) => {
      const newToken = res.data.userLogin.payload.token;
      sessionStorage.setItem("goonToken", newToken);
      console.log("\n", "login update complete");
      props.history.push("/home");
    }
  });

  const { email, password } = values;

  return (
    <div style={styles.container}>
      <TextField
        fullWidth
        label="Email"
        type="email"
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
        variant="filled"
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        value={values.password}
        onChange={handleChange('password')}
        margin="normal"
        variant="filled"
      />
      <div
        onClick={() =>
          myLoginMutation({
            variables: { email, password },
          })
        }
      >
        <Button variant="outlined" fullWidth size="large">Submit</Button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
};
