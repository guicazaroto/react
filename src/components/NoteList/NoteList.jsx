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
                <NoteCard
                  noteTitle={note.title}
                  noteBody={note.body}
                  noteIndex={index}
                  deleteNote={this.props.deleteNote}
                />
              </li>
            )
        })}
      </ul>
    )
  }
}

export default NoteList