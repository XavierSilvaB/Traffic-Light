import React, { useState } from "react";
//include images into your bundle
import logoimage from "../../img/Logo4geeks.png";
//create your first component
const Home = () => {
  const [color, setColor] = useState("");
  return (
    <div className="traffic-box">
      <div className="document-container">
        <h3 className="title">Traffic Light</h3>
        <h3 className="title2">4Geeks Academy / Xavier Silva</h3>
      </div>
      <div className="traffic-light">
        <div
          className={"light red" + (color == "red" ? " On-1" : "")}
          onClick={() => {
            setColor("red");
          }}
        ></div>
        <div
          className={"light yellow" + (color == "yellow" ? " On-2" : "")}
          onClick={() => {
            setColor("yellow");
          }}
        ></div>
        <div
          className={"light green" + (color == "green" ? " On-3" : "")}
          onClick={() => {
            setColor("green");
          }}
        ></div>
      </div>
	  <div className="barra">
		<p>1</p>
	  </div>
    </div>
  );
};

export default Home;
