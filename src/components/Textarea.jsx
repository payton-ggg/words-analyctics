import { useState } from "react";
import Warning from "./Warning";

const Textarea = () => {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    if (e.target.value.includes("<script>")) {
      setWarningText("No script allowed");
      setShowWarning(true);
    } else if (e.target.value.includes("@")) {
      setWarningText("No @ allowed");
    }
    setText(e.target.value);
  };

  return (
    <>
      <textarea
        onChange={handleChange}
        value={text}
        className="textarea"
        placeholder="Enter your text"
        spellCheck="false"
      />
      {showWarning ? <Warning warningText={warningText} /> : null}
    </>
  );
};

export default Textarea;
