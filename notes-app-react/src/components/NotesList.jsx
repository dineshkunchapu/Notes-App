import { useState } from "react";
import Note from "./Note.jsx";

function NotesList({ notes, addNote, deleteNote }) {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="input-area">
        <textarea
          className="note-input"
          placeholder="Empty Note"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button
          className="btn"
          onClick={() => {
            addNote(text);
            setText("");
          }}
        >
          +
        </button>
      </div>

      <div className="notes">
        {notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={() => deleteNote(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default NotesList;
