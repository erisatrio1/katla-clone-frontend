import React from 'react'

const Keypad = ({usedKeys}) => {

    const letters = [
        {key: 'q'}, {key: 'w'}, {key: 'e'}, {key: 'r'}, {key: 't'}, {key: 'y'}, {key: 'u'}, {key: 'i'}, {key: 'o'}, {key: 'p'},
        {key: 'a'}, {key: 's'}, {key: 'd'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'j'}, {key: 'k'}, {key: 'l'}, 
    ]

    const lettersThird = [
        {key: 'z'}, {key: 'x'}, {key: 'c'}, {key: 'v'}, {key: 'b'}, {key: 'n'}, {key: 'm'}, 
    ]

  return (
    <div className="keypad">
      {letters.map(letter => {
        const color = usedKeys[letter.key]
        return (
          <div key={letter.key} className={color}>{letter.key}</div>
        )
      })}
      <div className='enter'>Enter</div>
      {lettersThird.map(letter => {
        const color = usedKeys[letter.key]
        return (
          <div key={letter.key} className={color}>{letter.key}</div>
        )
      })}
      <div className='enter'>Del</div>
    </div>
  )
}

export default Keypad