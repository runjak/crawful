import React from 'react';
import UserStatus from './UserStatus';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserStatus />
      </header>
      <SignIn />
    </div>
  );
}

export default App;
