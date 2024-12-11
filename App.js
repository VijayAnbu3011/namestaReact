import React from "react";
import ReactDOM from "react-dom/client";

function cerateDiv(tag, id, child) {
  return React.createElement(tag, id, child);
}

let heading = cerateDiv("div", { id: "heading" }, [
  "Hello vijay",
  cerateDiv("h1", { id: "Child1" }, ["I am in second div"]),
  cerateDiv("h2", { id: "Child2" }, "I am in third div"),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
