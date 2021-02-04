import React from "react"
import './AddCardForm.css'

class AddCardForm extends React.Component {

  constructor () {
    super()
    this.title = '';
  }

  handleChangeTitle (event) {
    this.title = event.target.value
  }

  handleChangeBody (event) {
    this.body = event.target.value
  }

  handleCard (event) {
    event.preventDefault()
    console.log(this.title)
    console.log(this.body)
  }

  render() {
    return (
      <form className="note-form" onSubmit={this.handleCard.bind(this)}>
        <input
          onChange={this.handleChangeTitle.bind(this)}
          type="text"
          placeholder="Título"
        />
        <textarea
          onChange={this.handleChangeBody.bind(this)}
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