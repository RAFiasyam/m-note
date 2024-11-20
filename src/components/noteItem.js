import React from 'react';

function NoteItem({ note, onDeleteNote }) {
  const handleDelete = () => {
    onDeleteNote(note.id);
  };

  return (
    <div className="card bg-primary text-white w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{note.title}</h2>
    <p className='text-left'>{note.content}</p>
    <div className="card-actions justify-end">
      <button className="btn text-white" onClick={handleDelete}>Hapus</button>
    </div>
  </div>
</div>
  );
}

export default NoteItem;