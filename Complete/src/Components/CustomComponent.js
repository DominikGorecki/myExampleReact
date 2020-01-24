import React from "react";

const CustomComponent = props => {
  return (
    <div>
      <h2>Custom Component</h2>
      {props.children}
    </div>
  );
};

export default CustomComponent;
