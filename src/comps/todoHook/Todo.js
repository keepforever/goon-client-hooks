import React from 'react';

export default ( { text, isCompleted } ) => {
  return (
    <div>
      <h4>{text}</h4>
      <h5>{isCompleted ? "completed" : "INCOMPLETE"}</h5>
    </div>
  )
};
