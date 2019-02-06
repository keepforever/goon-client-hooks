import React from "react";
import TextField from "@material-ui/core/TextField";

function FilledTextFields() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

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
    </div>
  );
}

export default FilledTextFields;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
}
