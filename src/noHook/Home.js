import React, { Component } from 'react';

class Home extends Component {

  render () {
    return (
      <div>
        <h1>Hello Home</h1>
        <button
          style={styles.button}
          onClick={() => {
            sessionStorage.clear();
          }}
        >
          Clear Storage
        </button>
      </div>
    );
  }
}

export default Home

const styles = {
  button: {
    fontSize: 30,
    width: 300,
    height: 60,
    background: "blue",
    color: "yellow"
  }
};
