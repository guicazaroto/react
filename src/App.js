import React from 'react'
import AddCardForm from './components/AddCardForm'
import NoteList from './components/NoteList'
import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.notes = []
  }

  createNote (title, body) {
    this.notes.push({ title, body })
    this.setState(this.notes)
  }

  render() {
    return (
      <div className="App container">
        <AddCardForm createNote={this.createNote.bind(this)} />
        <NoteList notes={this.notes}/>
      </div>
    );
  }
}

export default App;
