import React from 'react';
import AuthCard from '../comps/auth/AuthCard'

export default ( props ) => {
  return (
    <div style={styles.container}>
      <h2>Hello Landing</h2>
      <AuthCard {...props}/>
    </div>
  )
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
}
