import React from 'react'
import { ReactComponent as DeleteIcon } from '../../assets/images/trash-icon.svg'
class NoteCard extends React.Component {
  deleteNoteByIndex(){
    this.props.deleteNote(this.props.noteIndex)
  }

  render () {
    return(
      <section>
        <header className="card-header">
          <h2>{this.props.noteTitle}</h2>
          <DeleteIcon onClick={this.deleteNoteByIndex.bind(this)} />
        </header>
        <p>{this.props.noteBody}</p>
      </section>
    )
  }
}

export default NoteCard