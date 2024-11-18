import React, { useState } from 'react';
import './App.css';
import NoteList from './components/noteList';
import PopUp from './popUp';
import NoteForm from './components/noteForm';


function App() {
  const [notes, setNotes] = useState([]);
  
  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  }

  const handleDeleteNote = (index) => {
    const newNote = [...notes];
    newNote.splice(index, 1);
    setNotes(newNote);
  }

  return (
    <div className="App">
      <PopUp />
      {/* <NoteForm onAddNote={handleAddNote} /> */}
      <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;
