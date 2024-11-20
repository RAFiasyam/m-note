import React from 'react';
import NoteItem from './noteItem';

function NoteList({ notes, onDeleteNote }) {

  const handleDeleteNote = () => {
    onDeleteNote(notes.id)
  }

  return (
    <div className='flex flex-col gap-5 items-center justify-center m-5'>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDeleteNote={handleDeleteNote} />
      ))}
    </div>
  );
}

export default NoteList;