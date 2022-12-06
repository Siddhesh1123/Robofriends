import React from "react";
import "./Search.css";

const Searchbox = ({ searching }) => {
  return (
    <div className="tc pa2">
          <input
        onChange={searching}
        type="search"
        placeholder="Search Robots"
        className="bg-light-green  ba b--red  br-pill "
        style={{padding:"10px"}}
      />
    </div>
  );
};

export default Searchbox;
