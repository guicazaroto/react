import React from "react"
import './AddCardForm.css'

class AddCardForm extends React.Component {
  render() {
    return (
      <form className="note-form">
        <input type="text" placeholder="Título" /> <br />
        <textarea cols="30" rows="10" placeholder="Descrição"></textarea> <br />
        <button type="submit">Cadastrar</button>
      </form>
    )
  }
}

export default AddCardForm