import { useState, useEffect } from "react";
import NotesList from "./components/NotesList.jsx";

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  const addNote = (text) => {
    if (text.trim() === "") return;
    setNotes([...notes, text]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <h1 className="heading">D&apos;s Diary</h1>
      <p className="para">Share your thoughts and feelings!</p>

      <div className="app">
        <NotesList
          notes={notes}
          addNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </>
  );
}

export default App;
