import React, { Component } from 'react'

const words = [
    "verrez",
    "corps",
    "copropriete",
    "justifiee",
    "christ",
    "terminal",
    "consecutif",
    "abris",
    "surplace",
    "presents",
    "consommatrice",
    "musee",
    "sommeille",
    "recentes",
    "recits",
]

class WordGenerator extends Component {
    static generate() {
        return words[Math.floor(Math.random()*words.length)];
    }
}

export default WordGenerator;