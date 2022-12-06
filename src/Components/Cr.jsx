import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

function Cr({ data }) {
  //use state
  const [carddata, setdata] = useState([]);
  //excutes whenver page opens
  useEffect(() => {
    setdata(data);
     console.log(data);
  },
    [data] //must condition otherswise it will loop of infinty
  );
  return (
    <div>
      {/* {condtion?True:False} */}
      {carddata === undefined  ? (
        <p>No data found</p>
      ) : (
          //for loop
        carddata.map((data, index) => {
          return (
            <Card
              id={data.id}
              name={data.name}
              email={data.email}
              key={index}
            />
          );
        })
      )}
    </div>
  );
}

export default Cr;
