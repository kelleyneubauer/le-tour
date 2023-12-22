import "../App.css";
import React from "react";
import { DefaultButton } from "@fluentui/react/lib/Button";

function getRandomNumber() {
  return Math.floor(Math.random() * 2) + 1;
  // return Math.floor(Math.random() * 100) + 1;
}

const handleClick = () => {
  const num = getRandomNumber();
  const message = num === 2 ? "WINNER!\nWINNER!\nWINNER!" : "try again";
  alert(message);
};

function Masher() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <p>BUTTON MASHER</p>
      {/* </header> */}
      <p>
        Click until you win - may the odds ever be in your favor.
        <br />
        <br />
        Screenshot and show Kelley
      </p>
      <DefaultButton text="click me" onClick={handleClick} />
    </div>
  );
}

export default Masher;
