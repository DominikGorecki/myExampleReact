import React from "react";
import ReactDOM from "react-dom";

import CustomComponent from "./Components/CustomComponent";

const App = () => {
  return (
    <CustomComponent>
      <div>Some Children</div>
    </CustomComponent>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
