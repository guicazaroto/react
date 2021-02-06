import React from 'react'
import AddCardForm from './components/AddCardForm'
import NoteList from './components/NoteList'
import './App.css'

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

  render() {
    return (
      <div className="App container">
        <AddCardForm createNote={this.createNote.bind(this)} />
        <NoteList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
