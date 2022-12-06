import React from "react";
import { ReactDOM } from "react";

const Card = (props) => {
  return (
    <div className="bg-light-red dib br3 pa3 ma2 grow bw3 shadow-5 tc">
      {/* <h1 className="f1 tc">Monsters</h1> */}
          <img alt="Robos" src={`https://robohash.org/d${props.id}size=200x200`}></img>
      <>
              <h2>{props.name }</h2>
              <p>{props.email }</p>
      </>
    </div>
  );
};

export default Card;