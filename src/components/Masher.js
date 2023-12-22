import React from "react";
import { DefaultButton } from "@fluentui/react/lib/Button";

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const handleClick = () => {
  const num = getRandomNumber();
  const message = num === 2 ? "masher\nWINNER!\nWINNER!\nWINNER!" : "try again";
  alert(message);
};

function Masher() {
  return (
    <div className="App">
      <p>BUTTON MASHER</p>
      <p>Click until you win</p>
      <p>Screenshot the WINNER! alert and show Kelley</p>
      <DefaultButton text="click me" onClick={handleClick} />
    </div>
  );
}

export default Masher;
