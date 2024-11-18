import React, { useState } from 'react';
import './App.css';
import NoteList from './components/noteList';
import PopUp from './popUp';

function App() {
  const [notes, setNotes] = useState([]);

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <PopUp onAddNote={handleAddNote} />
      <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;