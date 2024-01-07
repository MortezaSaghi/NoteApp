import { useState } from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import NoteList from "./Components/NoteList";
import AddNewNote from "./Components/AddNewNote";

function App() {
  const [notes, setNotes] = useState([]);
  const addToNotes = (newNote) => {
    setNotes((preState) => [...preState, newNote]);
  };
  // ---- Delete Function
  const deleteNote = (id) => {
    setNotes((preState) => preState.filter((note) => note.id !== id));
  };
  // ---- Toggle Compeled Function
  const toggleCompeled = (event) => {
    const noteId=Number(event.target.value);
    setNotes((prevState) =>
      prevState.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : { ...note }
      )
  );
  };
  return (
    <div className="bg-slate-200 min-h-screen h-full pb-8">
      <div className="container mx-auto text-center">
        <AppHeader notes={notes} />
        <div className="note-app pt-4 md:flex md:justify-between">
          <AddNewNote onAddToNotes={addToNotes} />
          <NoteList
            notes={notes}
            onDeleteNote={deleteNote}
            onToggleCompeled={toggleCompeled}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
