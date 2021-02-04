import React from 'react'
import NoteCard from './NoteCard'

class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {['estudo', 'trabalho', 'lazer'].map((item, index) => {
            return(
              <li>
                <h2>{item}</h2>
                <NoteCard />
              </li>
            )
        })}
      </ul>
    )
  }
}

export default NoteList