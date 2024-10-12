import React, { useState } from 'react';

const About: React.FC = () => {
  const[count,setCount] = useState(0);
  return (
    <div>
      <h1>About Page {count}</h1>
      <p onClick={()=>setCount(count+1)}>This is the about page.</p>
    </div>
  );
};

export default About;
