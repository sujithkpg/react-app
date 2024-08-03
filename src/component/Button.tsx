import React, { act } from 'react';

interface Button {
    name:string;
    action: () => void;  // Changed `any` to a function type
}

const ButtonApp: React.FC<Button> =({name,action})=>{
    return (
        <button className="btn-primary" onClick={action}>{name}</button>
    );
};

export default ButtonApp;