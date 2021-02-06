import React from 'react'
import './AddCardForm.css'

class AddCardForm extends React.Component {

  constructor () {
    super()
    this.title = '';
  }

  _handleChangeTitle (event) {
    this.title = event.target.value
  }

  _handleChangeBody (event) {
    this.body = event.target.value
  }

  _createNote (event) {
    event.preventDefault()
    this.props.createNote(this.title, this.body)
  }

  render() {
    return (
      <form className="note-form" onSubmit={this._createNote.bind(this)}>
        <input
          onChange={this._handleChangeTitle.bind(this)}
          type="text"
          placeholder="Título"
        />
        <textarea
          onChange={this._handleChangeBody.bind(this)}
          cols="30"
          rows="10"
          placeholder="Descrição"
        />
        <button type="submit">Cadastrar</button>
      </form>
    )
  }
}

export default AddCardForm