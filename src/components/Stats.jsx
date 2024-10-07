const Stats = () => {
  return (
    <section className="stats">
      <Stat label="words" />
      <Stat label="characters" />
      <Stat label="instagram" />
      <Stat label="facebook" />
    </section>
  );
};

// eslint-disable-next-line react/prop-types
function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default Stats;
