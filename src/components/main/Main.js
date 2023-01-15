import Controls from '../controls/Controls.js';
import Display from '../display/Display.js';
import Stats from '../stats/Stats.js';
import { useState } from 'react';

export default function Main() {
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);
  const [catchphrases, setCatchphrases] = useState([]);

  return (
    <div>
      <Controls />
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
