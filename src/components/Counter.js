import React from 'react';

const Counter = ({ number, onIncrement, onDecrement }) => {
    return (
        <div>
            <p>{number}</p>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    );
}

Counter.defaultProps = {
    number: 0,
    onIncrement: () => console.warn('i'),
    onDecrement: () => console.warn('d')
}

export default Counter;