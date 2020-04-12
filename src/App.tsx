import React from 'react';

import { getIdentifier } from './util/identification';
import CrowButton from './CrowButton';
import CrowChart from './CrowChart';

function App() {
  const identifier = getIdentifier();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Current identifier is: '{identifier}'.
        </p>
      </header>
      <CrowChart />
      <footer>
        <CrowButton />
      </footer>
    </div>
  );
}

export default App;
