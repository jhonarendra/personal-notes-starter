import React from 'react'
import BodySection from '../components/BodySection'
import HeaderSection from '../components/HeaderSection'
import NoteForm from '../components/note/NoteForm'
import NoteList from '../components/note/NoteList'
import { getInitialData } from '../utils'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allNotes: [],
      notes: []
    }
  }
  getNote = (archived = false) => {
    let notes = [...this.state.notes]
    notes = notes.filter(note => note.archived === archived)
    return notes
  }
  tambahNote = (form) => {
    const notes = [...this.state.notes]
    const newNotes = {
      id: +new Date(),
      title: form.title,
      body: form.body,
      createdAt: new Date(),
      archived: false
    }
    notes.push(newNotes)
    this.setState({
      ...this.state,
      notes
    })
  }
  moveNote = (id, val) => {
    const notes = [...this.state.notes]
    notes[notes.findIndex(note => note.id === id)].archived = val
    this.setState({
      ...this.state,
      notes
    })
  }
  deleteNote = (id) => {
    const notes = [...this.state.notes]
    notes.splice(notes.findIndex(note => note.id === id), 1)
    this.setState({
      ...this.state,
      notes
    })
  }
  handleSearch = (search) => {
    let notes = [...this.state.allNotes]
    if (search !== '') {
      notes = notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()))
    }
    this.setState({
      ...this.state,
      notes
    })
  }
  
  componentDidMount() {
    const allNotes = getInitialData()
    const notes = getInitialData()

    this.setState({
      ...this.state,
      allNotes,
      notes
    })
  }

  render() {
    return (
      <>
        <HeaderSection
          handleSearch={this.handleSearch}
        />
        <BodySection>
          <>
            <NoteForm
              tambahNote={this.tambahNote}
            />
            <h2>Catatan Aktif</h2>
            <NoteList
              notes={this.getNote()}
              listType="aktif"
              moveNote={this.moveNote}
              deleteNote={this.deleteNote}
            />
            <h2>Arsip</h2>
            <NoteList
              notes={this.getNote(true)}
              listType="arsip"
              moveNote={this.moveNote}
              deleteNote={this.deleteNote}
            />
          </>
        </BodySection>
      </>
    )
  }
}

export default IndexPage