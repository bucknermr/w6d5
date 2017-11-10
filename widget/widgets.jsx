import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./frontend/clock";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Clock />, document.querySelector("#root"));

});
