import React from 'react';
import UserStatus from './UserStatus';
import UserInfo from './UserInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserStatus />
      </header>
      <UserInfo />
    </div>
  );
}

export default App;
