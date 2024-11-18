import React, { useState } from 'react'
import NoteForm from './components/noteForm';

function PopUp({ onAddNote }) {
  const [isOpen, setIsOpen] = useState(false);
  

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handleAddNote = (newNote) => {
    onAddNote([newNote]);
  }

  return (
    <div>
      <button onClick={togglePopup}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Buka Popup
      </button>
      {isOpen && (
        <div>
          <NoteForm onAddNote={handleAddNote} />
          <button
            type="button"
            onClick={togglePopup}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Tutup
          </button>
        </div>
      )}
    </div>
  )
}

export default PopUp