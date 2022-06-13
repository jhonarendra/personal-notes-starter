import React from 'react'

function HeaderSection () {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari catatan ..." value="" />
      </div>
    </div>
  )
}

export default HeaderSection