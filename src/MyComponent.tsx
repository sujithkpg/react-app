import React from 'react';

// Define the props type
interface MyComponentProps {
  name: string;
}

// Create the functional component
const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div>
      <h6 className='foter-title'>Powered By, {name}</h6>
    </div>
  );
};

export default MyComponent;