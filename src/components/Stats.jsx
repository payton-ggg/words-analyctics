// eslint-disable-next-line react/prop-types
const Stats = ({ numberOfCharacters, words }) => {
  return (
    <section className="stats">
      <Stat number={numberOfCharacters} label="characters" />
      <Stat number={words} label="words" />
      <Stat number={280 - numberOfCharacters} label="instagram" />
      <Stat number={2800 - numberOfCharacters} label="facebook" />
    </section>
  );
};

// eslint-disable-next-line react/prop-types
function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className="stat"
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default Stats;
