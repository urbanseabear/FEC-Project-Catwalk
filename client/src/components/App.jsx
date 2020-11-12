import React, { useState } from 'react';
import '../styles/main.scss';
import QAmodule from './Q&A/QAmodule';

const App = ({ names }) => {
  const group = names.map((name, i) => {
    return (
      <h2 key={i} style={{ margin: '10px', color: 'blue' }}>
        {name}
      </h2>
    );
  });

  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', color: 'red' }}>
      <h1>Team Dobos Torte</h1>
      {group}
      <QAmodule />
      <p>You clicked {count} times</p>
      <button className="sassButton" onClick={() => { setCount(count + 1); }}>
        Click me
      </button>
      <button className="ui primary button" onClick={() => { setCount(0); }}>
        Reset
      </button>
    </div>
  );
};

export default App;
