import React, { useState } from 'react';

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date()
    };

    onAddNote(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Judul Catatan"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Isi Catatan"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Tambah Catatan</button>
    </form>
  );
}

export default NoteForm;