import Controls from '../controls/Controls.js';
import Display from '../display/Display.js';
import Stats from '../stats/Stats.js';
import { useState } from 'react';

export default function Main() {
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);
  const [newCatchphrase, setNewCatchphrase] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);

  const handleClick = () => {
    let input = document.getElementById('catchphrase');
    setCatchphrases((prevState) => [...prevState, newCatchphrase]);
    input.value = '';
  };

  return (
    <div>
      <Controls
        setHeadCount={setHeadCount}
        setMiddleCount={setMiddleCount}
        setPantsCount={setPantsCount}
        setCatchphrases={setCatchphrases}
        setNewCatchphrase={setNewCatchphrase}
        handleClick={handleClick}
      />
      <Stats
        headCount={headCount}
        middleCount={middleCount}
        pantsCount={pantsCount}
        catchphrases={catchphrases}
      />
      <Display />
    </div>
  );
}
