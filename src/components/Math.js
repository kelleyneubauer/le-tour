import React, { useState } from "react";
import { TextField, DefaultButton } from "@fluentui/react";

const questions = {
  1: "purple circle",
  2: "red rhombus + orange oval",
  3: "blue rectangle - green triangle",
  4: "yellow triangle + yellow circle - red rectangle",
  5: "pink oval + brown square * white square",
  6: "red circle + orange circle + yellow circle + green circle + blue rhombus + purple oval + pink oval + black rectangle",
  7: "purple circle + bule circle",
};
const answers = {
  1: "69",
  2: "1037",
  3: "302",
  4: "696",
  5: "356",
  6: "19115",
  7: "489",
};

function Math() {
  const [inputText, setInputText] = useState("");
  const [currentProblem, setCurrentProblem] = useState(1);

  const handleChange = (event, newValue) => {
    setInputText(newValue);
  };

  const handleSubmit = () => {
    if (inputText === answers[currentProblem]) {
      setInputText("");
      const alertText =
        currentProblem === Object.keys(answers).length
          ? "shy guy says\nWINNER!\nWINNER!\nWINNER!"
          : "good!";
      alert(alertText);
      setCurrentProblem(currentProblem + 1);
    } else {
      alert("try again");
    }
  };

  return (
    <div className="App">
      <p>SHY GUY SAYS</p>
      <p>Solve all problems. Round up if necessary</p>
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

export default Math;
