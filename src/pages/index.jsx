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
      notes: [],
      aksi: ''
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
    notes.sort(function(a, b){
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    this.setState({
      ...this.state,
      notes,
      aksi: ''
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
  handleShowFormTambah = () => {
    this.setState({
      ...this.state,
      aksi: (this.state.aksi === 'tambah') ? '' : 'tambah'
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
            <h2>Catatan Aktif</h2>
            <button
              className='button-tambah'
              onClick={this.handleShowFormTambah}
            >
              Tambah Catatan
            </button>
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
        {
          (this.state.aksi === 'tambah') ? (
            <NoteForm
              tambahNote={this.tambahNote}
              closeForm={this.handleShowFormTambah}
            />
          ) : ''
        }
        
      </>
    )
  }
}

export default IndexPage