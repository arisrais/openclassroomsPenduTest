import React from 'react'

import './Letter.css'

const HIDDEN_SYMBOL = '_'

const Letter = ({letter, matched}) => (
    <span className="ml-2" >{letter !== ' ' && !matched ? HIDDEN_SYMBOL : letter}</span>        
)

export default Letter