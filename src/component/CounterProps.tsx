import React, { useState,useEffect } from 'react';

interface CounterProps {
  team: string;
}

const Counter: React.FC<CounterProps> = ({ team }) => {
    const localStorageKey = `counter-${team}`;
    const [count, setCount] = useState(() => {
      // Retrieve initial count from localStorage, defaulting to 0 if not found
      const savedCount = localStorage.getItem(localStorageKey);
      return savedCount !== null ? parseInt(savedCount, 10) : 0;
    });
  
    useEffect(() => {
      // Save the count to localStorage whenever it changes
      localStorage.setItem(localStorageKey, count.toString());
    }, [count, localStorageKey]);
  

  return (
    <div className="counter">
      <h2>{team}</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count>0?count - 1:0)}>Decrease</button>
    </div>
  );
};

export default Counter;