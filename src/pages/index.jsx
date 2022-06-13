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
      notes: []
    }
  }
  componentDidMount() {
    const notes = getInitialData()

    this.setState({
      notes
    })
  }
  moveNote = (id, val) => {
    const notes = [...this.state.notes]
    notes[notes.findIndex(note => note.id === id)].archived = val
    this.setState({
      notes
    })
  }
  deleteNote = (id) => {
    const notes = [...this.state.notes]
    notes.splice(notes.findIndex(note => note.id === id), 1)
    this.setState({
      notes
    })
  }
  render() {
    return (
      <>
        <HeaderSection />
        <BodySection>
          <>
            <NoteForm />
            <h2>Catatan Aktif</h2>
            <NoteList
              notes={this.state.notes.filter(note => !note.archived)}
              listType="aktif"
              moveNote={this.moveNote}
              deleteNote={this.deleteNote}
            />
            <h2>Arsip</h2>
            <NoteList
              notes={this.state.notes.filter(note => note.archived)}
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