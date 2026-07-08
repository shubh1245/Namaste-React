const parent = React.createElement("div",{id:"parent"},
  React.createElement("div",{id:"child"},
    [
      React.createElement("h1",{},"Shubham"),
      React.createElement("h2",{},"Kumar")
    ]
  )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);