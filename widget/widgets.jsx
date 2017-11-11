import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./frontend/clock";
import Tabs from "./frontend/tabs.jsx";

class Root extends React.Component {
  render(){
    const props = [
      {title: "Tab 1", content: "Tab1 content"},
      {title: "Tab 2", content: "Tab2 content"},
      {title: "Tab 3", content: "Tab3 content"}
    ];

    return(
      <div>
        <Clock />
        <Tabs tabs={props}/>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root />,
  document.querySelector("#root"));

});
