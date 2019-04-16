import React from 'react'

const KeyboardKey = ({stateClass, onClick, letter}) => (
    <button 
        className={`btn btn-dark ml-2 ${stateClass}`}
        onClick={() => onClick(letter)}
        type="button"
    >
        {letter}
    </button>
)

export default KeyboardKey