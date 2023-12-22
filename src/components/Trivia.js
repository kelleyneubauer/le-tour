import React, { useState } from "react";
import { TextField, DefaultButton } from "@fluentui/react";

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

  const handleChange = (event, newValue) => {
    setInputText(newValue);
  };

  const handleSubmit = () => {
    if (inputText.toLowerCase() === answers[currentProblem]) {
      setInputText("");
      const alertText =
        currentProblem === Object.keys(answers).length
          ? "trivia\nWINNER!\nWINNER!\nWINNER!"
          : "good!";
      alert(alertText);
      setCurrentProblem(currentProblem + 1);
      setGuessNumber(1);
    } else {
      const alertText =
        guessNumber % 2 === 0
          ? "try again\n\nNeed a hint?\nText my AI LLM, Little Lan Man\n(206)-619-LANS"
          : "try again";
      alert(alertText);
      setGuessNumber(guessNumber + 1);
    }
  };

  return (
    <div className="App">
      <p>TRIVIA</p>
      <p>Answer all questions</p>
      <p>Screenshot the WINNER! alert and show Kelley</p>
      <TextField
        label={questions[currentProblem]}
        value={inputText}
        onChange={handleChange}
        styles={{
          fieldGroup: {
            width: 300,
          },
        }}
      />
      <DefaultButton
        text="Submit"
        onClick={handleSubmit}
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}

export default Trivia;
