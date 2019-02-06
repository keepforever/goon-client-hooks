import React from 'react';
import MyCard from '../comps/MyCard'

export default ( props ) => {
  return (
    <div style={styles.container}>
      <h2>Hello Landing</h2>
      <MyCard {...props}/>
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
