import React from "react";
import ReactDOM from "react-dom";

const img = "http://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      Favorite foods!
    </h1>

    <img alt="random" src={img + "?grayscale"} />

    <img
      className="food-img"
      alt="Bacon"
      src="https://kristineskitchenblog.com/wp-content/uploads/2021/09/bacon-in-oven-square-.jpg"
    />
    <img
      className="food-img"
      alt="Pizza"
      src="https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=170667a&w=0&k=20&c=iNZpvQkg4H-Xe77n8ZP782eOIgvoM71EqS7n6Ra3NyE="
    />
    <img
      className="food-img"
      alt="Steak"
      src="data:image/jpeg;base64,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"
    />
  </div>,
  document.getElementById("root")
);
