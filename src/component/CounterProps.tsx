import React, { useState } from 'react';

interface CounterProps {
  team: string;
}

const Counter: React.FC<CounterProps> = ({ team }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>{team}</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Counter;