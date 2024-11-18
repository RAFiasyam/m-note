import React from 'react';
import NoteItem from './noteItem';

function NoteList({ notes, onDeleteNote }) {

  const handleDeleteNote = () => {
    onDeleteNote(notes.id)
  }

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDeleteNote={handleDeleteNote} />
      ))}
    </ul>
  );
}

export default NoteList;