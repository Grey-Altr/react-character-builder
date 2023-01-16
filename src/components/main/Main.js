import Controls from '../controls/Controls.js';
import Display from '../display/Display.js';
import Stats from '../stats/Stats.js';
import './Main.css';
import { useState } from 'react';

export default function Main() {
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);
  const [newCatchphrase, setNewCatchphrase] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);
  const [head, setHead] = useState('horse');
  const [middle, setMiddle] = useState('red');
  const [pants, setPants] = useState('leg');

  const handleClick = () => {
    let input = document.getElementById('catchphrase');
    setCatchphrases((prevState) => [...prevState, newCatchphrase]);
    input.value = '';
  };

  const onHeadChange = (head) => {
    setHeadCount(headCount + 1);
    setHead(head);
  };

  const onMiddleChange = (middle) => {
    setMiddleCount(middleCount + 1);
    setMiddle(middle);
  };

  const onPantsChange = (pants) => {
    setPantsCount(pantsCount + 1);
    setPants(pants);
  };

  return (
    <div className="main">
      <h2>Character Builder</h2>
      <Controls
        setNewCatchphrase={setNewCatchphrase}
        handleClick={handleClick}
        onHeadChange={onHeadChange}
        onMiddleChange={onMiddleChange}
        onPantsChange={onPantsChange}
      />
      <Stats
        headCount={headCount}
        middleCount={middleCount}
        pantsCount={pantsCount}
        catchphrases={catchphrases}
      />
      <Display head={head} middle={middle} pants={pants} />
    </div>
  );
}
