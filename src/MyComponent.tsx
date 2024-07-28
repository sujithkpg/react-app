import React from 'react';

// Define the props type
interface MyComponentProps {
  name: string;
}

// Create the functional component
const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default MyComponent;