import React from 'react'
import NoteCard from '../NoteCard/NoteCard'
import './NoteList.css'

class NoteList extends React.Component {
  render() {
    return (
      <ul className="note-list">
        {['estudo', 'trabalho', 'lazer'].map((item, index) => {
            return(
              <li className="note-item" key={index}>
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