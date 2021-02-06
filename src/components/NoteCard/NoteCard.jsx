import React from 'react'

class NoteCard extends React.Component {
  render () {
    return(
      <section>
        <header>
          <p>{this.props.noteBody}</p>
        </header>
      </section>
    )
  }
}

export default NoteCard