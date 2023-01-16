import './Controls.css';

export default function Controls({
  setNewCatchphrase,
  handleClick,
  onHeadChange,
  onMiddleChange,
  onPantsChange,
}) {
  return (
    <div className="controls">
      <section className="head">
        <label htmlFor="head">Head</label>
        <select onChange={(e) => onHeadChange(e.target.value)} name="head" id="head">
          <option value="horse">Horse</option>
          <option value="dog">Dog</option>
          <option value="bird">Bird</option>
          <option value="duck">Duck</option>
        </select>
      </section>

      <section className="middle">
        <label htmlFor="middle">Middle</label>
        <select onChange={(e) => onMiddleChange(e.target.value)} name="middle" id="middle">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="fancy">Fancy</option>
          <option value="pink">Pink</option>
        </select>
      </section>

      <section className="pants">
        <label htmlFor="pants">Pants</label>
        <select onChange={(e) => onPantsChange(e.target.value)} name="pants" id="pants">
          <option value="leg">Leg</option>
          <option value="blue">Blue</option>
          <option value="dog">Dog</option>
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
