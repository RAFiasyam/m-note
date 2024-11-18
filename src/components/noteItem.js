import React from 'react';

function NoteItem({ note, onDeleteNote }) {
  const handleDelete = () => {
    onDeleteNote(note.id);
  };

  return (
    <li>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Hapus</button>
    </li>
  );
}

export default NoteItem;