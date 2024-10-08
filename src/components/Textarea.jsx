import { useState } from "react";
import Warning from "./Warning";

// eslint-disable-next-line react/prop-types
const Textarea = ({ setText, text }) => {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    if (e.target.value.includes("<script>")) {
      setWarningText("No script allowed");
    } else if (e.target.value.includes("@")) {
      setWarningText("No @ allowed");
    } else {
      setWarningText("");
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
      <Warning warningText={warningText} />
    </>
  );
};

export default Textarea;
