import React from "react"

class AddCardForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título do card" /> <br />
        <textarea cols="30" rows="10" placeholder="descrição"></textarea> <br />
        <button type="submit">Cadastrar</button>
      </form>
    )
  }
}

export default AddCardForm