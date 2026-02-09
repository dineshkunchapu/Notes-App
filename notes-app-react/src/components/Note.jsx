function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <p>{note}</p>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
}

export default Note;
