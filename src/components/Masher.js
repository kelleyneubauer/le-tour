import React, { useState } from "react";
import {
  DefaultButton,
  Separator,
  Dialog,
  DialogFooter,
} from "@fluentui/react";

function getRandomNumber() {
  return Math.floor(Math.random() * 150) + 1 === 2
    ? "WINNER! WINNER! WINNER!"
    : "try again";
}

function Masher() {
  const [isDialogHidden, setDialogHidden] = useState(true);

  const handleClick = () => {
    setDialogHidden(false);
  };

  function closeDialog() {
    setDialogHidden(true);
  }

  return (
    <div className="App">
      <p>BUTTON MASHER</p>
      <p>Click until you win</p>
      <p>Screenshot the WINNER! alert and show Kelley</p>
      <Separator />
      {!isDialogHidden && (
        <Dialog
          hidden={isDialogHidden}
          onDismiss={closeDialog}
          dialogContentProps={{
            title: "Button Masher",
            subText: getRandomNumber(),
          }}
        >
          <DialogFooter>
            <DefaultButton onClick={closeDialog} text="Ok" />
          </DialogFooter>
        </Dialog>
      )}
      <DefaultButton text="click me" onClick={handleClick} />
    </div>
  );
}

export default Masher;
