import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", {id: "parent"},
  [
  React.createElement("div", {id:"child1"},
    [
      React.createElement("h1",{id:"ch1"},"Shubham"),
      React.createElement("h2",{id:"ch2"},"Kumar")
    ]
  ),
  
  React.createElement("div",{id:"child2"},
    [
      React.createElement("h1",{id:"ch3"},"Shubham"),
      React.createElement("h2",{id:"ch4"},"Kumar")
    ]
  )
  ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);