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
    <form onSubmit={handleSubmit} className='m-3'>
      <div className='flex flex-row gap-5 items-center justify-center m-5'>
        <input
          type="text"
          placeholder="Judul Catatan"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-60 max-w-xs"
        />
        <textarea
          placeholder="Isi Catatan"
          value={content}
          class="textarea textarea-bordered"
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="btn btn-success text-white" type="submit">Tambah Catatan</button>
    </form>
  );
}

export default NoteForm;