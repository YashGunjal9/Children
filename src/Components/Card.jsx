import React from 'react'

const Card = ({children}) => {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px"
        }}>
            
            {children}
        </div>
    );
};

export default Card;