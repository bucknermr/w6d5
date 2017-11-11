import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./frontend/clock";
import Tabs from "./frontend/tabs.jsx";
import Weather from "./frontend/weather.jsx";

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
        <Weather />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root />,
  document.querySelector("#root"));

});
