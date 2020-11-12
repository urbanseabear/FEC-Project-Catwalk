import React, { useState } from 'react';

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
      <p>You clicked {count} times</p>
      <button className="ui primary button" onClick={() => { setCount(count + 1); }}>
        Click me
      </button>
      <button className="ui primary button" onClick={() => { setCount(0); }}>
        Reset
      </button>
    </div>
  );
};

export default App;
