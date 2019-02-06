import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMutation } from "react-apollo-hooks";
import REGISTER_MUTATION from "../../graphql/m/REGISTER_MUTATION";

function FilledTextFields(props) {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const mySignupMutation = useMutation(REGISTER_MUTATION, {
    update: (_, res) => {
      const newToken = res.data.userSignup.token;
      sessionStorage.setItem("goonToken", newToken);
      console.log("\n", "login update complete");
      props.history.push("/home");
    }
  });

  const { email, password, name } = values;


  return (
    <div style={styles.container}>
      <TextField
        label="Name"
        value={values.name}
        onChange={handleChange("name")}
        margin="normal"
        variant="filled"
      />
      <TextField
        label="Email"
        type="email"
        value={values.email}
        onChange={handleChange("email")}
        margin="normal"

        variant="filled"
      />
      <TextField
        type="password"
        label="Password"
        value={values.password}
        onChange={handleChange("password")}
        margin="normal"
        variant="filled"
      />
      <div onClick={
        () => mySignupMutation({
          variables: { name, email, password }
        })
      }>
        <Button fullWidth size="large">Submit</Button>
      </div>
    </div>
  );
}

export default FilledTextFields;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}
