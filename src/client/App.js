import React, { useState } from 'react';
import './css/app.css';
import ReactImage from './react.png';

function App() {
  const [username, setUsername] = useState(null);

  function componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then((user) => { setUsername(user.username); });
  }

  componentDidMount();

  return (
    <div>
      {username ? (
        <h1>{`Hello ${username}`}</h1>
      ) : (
        <h1>Loading.. please wait!</h1>
      )}
      <img src={ReactImage} alt="react" />
    </div>
  );
}

export default App;
