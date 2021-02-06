import React from 'react'
import NoteCard from '../NoteCard'
import './NoteList.css'

class NoteList extends React.Component {
  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => {
            return(
              <li className="note-item" key={index}>
                <h2>{note.title}</h2>
                <NoteCard noteBody={note.body} />
              </li>
            )
        })}
      </ul>
    )
  }
}

export default NoteList