import React, { Component } from 'react'
import Letter from './Letter'
import KeyboardKey from './KeyboardKey'
import WordGenerator from './WordGenerator'

import './App.css';

const KEYBOARD_VALUES = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
const DEFAULT_STATE = {
  attempt: 0,
  usedLetters: [],
  guessedLetters: 0
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { word: this.generateWord(), ...DEFAULT_STATE }
  }

  generateWord() {
    return WordGenerator.generate().toUpperCase().split('');
  }

  handleKeyBoardClick = attemptLetter => {
      const {word, attempt, usedLetters, guessedLetters} = this.state
      let newGuessedLetters = guessedLetters

      word.map(letter => {
        if (letter === attemptLetter) {
          newGuessedLetters = newGuessedLetters + 1
        }
      })

      this.setState({guessedLetters: newGuessedLetters })

      if (!usedLetters.includes(attemptLetter)) {
        this.setState({attempt: attempt + 1, usedLetters : [...usedLetters, ...attemptLetter]})
      }
  }

  isLetterGuessed(index) {
    const {word, usedLetters} = this.state

    return usedLetters.indexOf(word[index]) !== -1
  }

  keyboardKeyClass(letter) {
    const {usedLetters} = this.state

    return usedLetters.includes(letter) ? 'disabled' : '';
  }

  restart = () => {
    this.setState({word: this.generateWord(), ...DEFAULT_STATE})
  }

  render() {
    const {word, attempt, guessedLetters} = this.state
    const won = word.length === guessedLetters

    return (
      <div className="pendu">
        <div className='mb-5 text-center'>
            {word.map((letter, index) => (
                <Letter 
                  letter={letter}
                  key={index}
                  matched={this.isLetterGuessed(index)}
                />
            ))}
        </div>
        {
          won ?
            (
              <div className='mb-5 text-center'>
                <h2>BRAVO !</h2>
                <h3>Nombre de tentative : {attempt}</h3>
                <button type="button" className="btn btn-primary mt-5" onClick={this.restart}>
                  Recommencer
                </button>
              </div>
            )
            :
            (
              <div>
                <div className='mb-5 text-center'>
                  {KEYBOARD_VALUES.map((letter, index) => (
                          <KeyboardKey
                              onClick={this.handleKeyBoardClick} 
                              letter={letter}
                              key={index}
                              stateClass={this.keyboardKeyClass(letter)}
                          />
                  ))}
                </div>
                <div className="mb-2 text-center">
                  <p className="blockquote-footer">tentative : {attempt}</p>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

export default App;