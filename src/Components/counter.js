import React, { useState } from "react";
import { connect } from 'react-redux';


const Counter = props => {
  
  console.log(props);

  const increment = () => {
    props.dispatch({ type: "INCREMENT" });
  };
 
  const decrement = () => {
    props.dispatch({ type: "DECREMENT" });
  };
 
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={() => decrement()} style={{marginRight:"10px", padding:"5px 10px", fontWeight:"bold"}}>-</button>
        <span className="count" >{props.count}</span>
        <button onClick={() => increment()} style={{marginLeft:"10px", padding:"5px 10px", fontWeight:"bold"}}>+</button>
      </div>
    </div>
  );
 };

 const mapStateToProps = state => {
  return {
    count: state.count
  };
 };

// export default Counter;
export default connect(mapStateToProps)(Counter);

