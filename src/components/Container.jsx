import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

const Container = () => {
  const [text, setText] = useState("");

  const words = text.split(" ").length;
  const numberOfCharacters = text.length;

  return (
    <section className="container">
      <Textarea text={text} setText={setText} />
      <Stats words={words} numberOfCharacters={numberOfCharacters} />
    </section>
  );
};

export default Container;
