import './Controls.css';

export default function Controls({
  setHeadCount,
  setMiddleCount,
  setPantsCount,
  setCatchphrases,
  setNewCatchphrase,
  handleClick,
}) {
  return (
    <div className="controls">
      <section className="head">
        <label htmlFor="head">Head</label>
        <select name="head" id="head">
          <option value="dog">Dog</option>
          <option value="bird">Bird</option>
          <option value="duck">Duck</option>
          <option value="horse">Horse</option>
        </select>
      </section>

      <section className="middle">
        <label htmlFor="middle">Middle</label>
        <select name="middle" id="middle">
          <option value="blue">Blue</option>
          <option value="fancy">Fancy</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </section>

      <section className="pants">
        <label htmlFor="pants">Pants</label>
        <select name="pants" id="pants">
          <option value="blue">Blue</option>
          <option value="dog">Dog</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
      </section>

      <section className="catchphrase">
        <label htmlFor="catchphrase">Catchphrase</label>
        <input onChange={(e) => setNewCatchphrase(e.target.value)} type="text" id="catchphrase" />
      </section>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
