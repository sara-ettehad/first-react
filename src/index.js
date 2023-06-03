import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      Favorite foods!
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Pizaa</li>
      <li>Stake</li>
    </ul>
  </div>,
  document.getElementById("root")
);
