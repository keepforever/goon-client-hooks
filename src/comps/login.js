import React from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
// graphql
import ME_QUERY from "../graphql/q/ME_QUERY";
import LOGIN_MUTATION from "../graphql/m/LOGIN_MUTATION";

export default props => {
  const myLoginMutation = useMutation(LOGIN_MUTATION, {
    update: (proxy, res) => {
      // console.log("\n", "proxy", "\n", "\n", proxy);
      // console.log("\n", "res", "\n", "\n", res);
      // console.log('\n', 'new token', res.data.userLogin.payload.token)
      const newToken = res.data.userLogin.payload.token
      sessionStorage.setItem("goonToken", newToken);
      props.history.push('/')
    }
  });

  const { data } = useQuery(ME_QUERY);

  return (
    <div>
      <h2>Hello LoginHook</h2>
      <button
        style={styles.button}
        onClick={() => {
          myLoginMutation({ variables: { email: "b", password: "b" } });
          console.log("\n", "data", data);
        }}
      >
        Login
      </button>
    </div>
  );
};

const styles = {
  button: {
    fontSize: 30,
    width: 300,
    height: 60,
    background: "blue",
    color: "yellow"
  }
};

// loginSubmit = async () => {
//     // disable button if submitting
//     if (this.state.isSubmitting) {
//       return;
//     }
//
//     const { email, password } = this.state;
//
//     // prevent empty credential submission
//     if (email.length === 0 || password.length === 0) {
//       alert("cannot have email, name or password be of lenth 0");
//       this.setState({
//         ...defaultState
//       });
//       return;
//     }
//
//     this.setState({ isSubmitting: true });
//     let response;
//     try {
//       response = await this.props.loginSubmitMutation({
//         variables: {
//           email,
//           password
//         }
//       });
//     } catch (error) {
//       console.log(error);
//       setTimeout(() => {
//         this.setState({ isSubmitting: false });
//         return;
//       }, 2000);
//       return;
//     }
//     //clearLog("LOGIN_MUTATION response", response.data.login.payload);
//     if (!response.data.login.payload) {
//       this.setState({
//         ...defaultState
//       });
//       alert("Sorry, something went wrong. Please try again");
//       return;
//     }
//
//     this.setState({
//       ...defaultState
//     });
//
//     this.props.setUserInfoAction(response.data.login.payload);
//
//     localStorage.setItem("snarfToken", response.data.login.payload.token);
//
//     this.props.toggleLandingPageAction();
//
//     this.setState({
//       redirectToReferrer: true
//     });
//   };
