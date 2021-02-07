import React from 'react'
import AddCardForm from './components/AddCardForm'
import NoteList from './components/NoteList'
import './assets/css/App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      notes: []
    }
  }

  createNote (title, body) {
    const newNote = { title, body }
    const noteState = [ ...this.state.notes, newNote ]
    this.setState({ notes: noteState })
  }

  deleteNote (index) {
    let notesArray = this.state.notes
    notesArray.splice(index, 1)
    this.setState({ notes: notesArray })
  }

  render() {
    return (
      <div className="App container">
        <AddCardForm createNote={this.createNote.bind(this)} />
        <NoteList
          notes={this.state.notes}
          deleteNote={this.deleteNote.bind(this)}
        />
      </div>
    );
  }
}

export default App;
