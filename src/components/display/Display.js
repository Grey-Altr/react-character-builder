import './Display.css';

export default function Display({ head, middle, pants }) {
  const headUrl = `./assets/${head}-head.png`;
  const middleUrl = `./assets/${middle}-middle.png`;
  const pantsUrl = `./assets/${pants}-pants.png`;

  return (
    <div>
      <section className="head-section">
        <img className="head-img" src={headUrl} />
      </section>
      <section className="middle-section">
        <img className="middle-img" src={middleUrl} />
      </section>
      <section className="pants-section">
        <img className="pants-img" src={pantsUrl} />
      </section>
    </div>
  );
}
