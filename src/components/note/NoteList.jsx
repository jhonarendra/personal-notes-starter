import React from 'react'
import NoteItem from './NoteItem'

function NoteList({ notes, listType, moveNote, deleteNote }) {
  return (
    <>
      {
        (notes.length > 0) ? (
          <div className='notes-list'>
          {
            notes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                listType={listType}
                moveNote={moveNote}
                deleteNote={deleteNote}
              />
            ))
          }
        </div>
        ) : (
          <p className="notes-list__empty-message">
            Tidak ada catatan
          </p>
        )
      }
    </>
  )
}

export default NoteList