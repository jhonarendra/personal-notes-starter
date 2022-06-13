import React from 'react'

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        title: '',
        body: ''
      },
      titleLimit: 50
    }
  }

  handleChange = (e) => {
    const form = {...this.state.form}
    if (e.target.name === 'title' && e.target.value.length > 50) {
      return false
    }
    form[e.target.name] = e.target.value
    this.setState({
      form,
      titleLimit: 50 - form.title.length
    })
  }
  render() {
    return (
      <div className='note-input'>
        <h2>Buat catatan</h2>
        <form>
          <p className="note-input__title__char-limit">
            Sisa karakter: { this.state.titleLimit }
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required=""
            value={this.state.form.title}
            name="title"
            onChange={this.handleChange}
          />
          <textarea
            className="note-input__body"
            type="text"
            name="body"
            placeholder="Tuliskan catatanmu di sini ..."
            required=""
            value={this.state.form.body}
            onChange={this.handleChange}
          >
          </textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}
export default NoteForm