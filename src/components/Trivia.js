import React, { useState } from "react";
import {
  TextField,
  DefaultButton,
  Separator,
  Dialog,
  DialogFooter,
} from "@fluentui/react";

const questions = {
  1: "The process of aging wine in barrels is known as __________",
  2: "The region in France famous for its sparkling wine is __________",
  3: "The year a wine is produced is referred to as its __________",
  4: "An __________ wine creates the sensation of dryness or puckering in the mouth and is caused by tannins",
  5: "The term for a professional who specializes in all aspects of wine service, including wine and food pairing, is __________",
};
const answers = {
  1: "oaking",
  2: "champagne",
  3: "vintage",
  4: "astringent",
  5: "sommelier",
};

function Trivia() {
  const [inputText, setInputText] = useState("");
  const [currentProblem, setCurrentProblem] = useState(1);
  const [guessNumber, setGuessNumber] = useState(1);
  const [isDialogHidden, setDialogHidden] = useState(true);
  const [dialogText, setDialogText] = useState("");

  function closeDialog() {
    setDialogHidden(true);
  }

  const handleChange = (event, newValue) => {
    setInputText(newValue);
  };

  const handleSubmit = () => {
    if (inputText.toLowerCase() === answers[currentProblem]) {
      setInputText("");
      const alertText =
        currentProblem === Object.keys(answers).length
          ? "WINNER! WINNER! WINNER!"
          : "good!";
      setDialogText(alertText);
      setCurrentProblem(currentProblem + 1);
      setGuessNumber(1);
    } else {
      const alertText =
        guessNumber % 2 === 0
          ? "Try again. Need a hint? Text my AI LLM, Little Lan Man: (206)-619-LANS"
          : "try again";
      setDialogText(alertText);
      setGuessNumber(guessNumber + 1);
    }
    setDialogHidden(false);
  };

  return (
    <div className="App">
      <p>TRIVIA</p>
      <p>Answer all questions</p>
      <p>Screenshot the WINNER! alert and show Kelley</p>
      <Separator />
      <p>{questions[currentProblem]}</p>
      <TextField
        value={inputText}
        onChange={handleChange}
        styles={{
          fieldGroup: {
            width: 300,
          },
          subComponentStyles: {
            label: {
              root: {
                // Styles for the label
                alignSelf: "center", // Center the label
              },
            },
          },
        }}
      />
      <DefaultButton
        text="Submit"
        onClick={handleSubmit}
        style={{ marginTop: "10px" }}
      />
      {!isDialogHidden && (
        <Dialog
          hidden={isDialogHidden}
          onDismiss={closeDialog}
          dialogContentProps={{
            title: "Trivia",
            subText: dialogText,
          }}
        >
          <DialogFooter>
            <DefaultButton onClick={closeDialog} text="Ok" />
          </DialogFooter>
        </Dialog>
      )}
    </div>
  );
}

export default Trivia;
