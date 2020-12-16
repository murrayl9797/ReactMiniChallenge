import React from "react";
// TO DO: Create a Fact Functional component which returns a div in the format below

// NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
const Fact = ({ fact, handleFavoriteClick }) => {
  return (
    <div className="factCard">
      <h1>{fact.animal}</h1>
      {/* TODO: Attach an onClick event to the button */}
      <button
        onClick={(e) => {
          //console.log(e);
          handleFavoriteClick(e);
        }}
        value={fact.animal}>
        Click to favorite
      </button>
      <img src={fact.image}
        width="600"
        height="400"
        style={{width: "600", height: "400"}}
      />
      <h3>{fact.fact}</h3>
    </div>
  );
};

export default Fact;
