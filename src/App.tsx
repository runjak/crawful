import React from 'react';

import { getIdentifier } from './util/identification';

function App() {
  const identifier = getIdentifier();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Current identifier is: '{identifier}'.
        </p>
      </header>
    </div>
  );
}

export default App;
