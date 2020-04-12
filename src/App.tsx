import React from 'react';

import { getIdentifier } from './util/identification';
import CrowButton from './CrowButton';
import RecentCrows from './RecentCrows';

function App() {
  const identifier = getIdentifier();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Current identifier is: '{identifier}'.
        </p>
      </header>
      <RecentCrows />
      <footer>
        <CrowButton />
      </footer>
    </div>
  );
}

export default App;
