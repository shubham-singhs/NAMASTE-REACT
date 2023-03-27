import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
  "h1",
  { id: "heading", class: "abc" },
  "Hello world from React!"
); //{} is the place where you get attribute of the tab
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "This is namaste react "),
    React.createElement("h2", { id: "heading3" }, "h2 hoola"),
  ]),
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
