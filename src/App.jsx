import { useReducer, useState } from "react";
import "./App.css";
//--- import Componnets
import AppHeader from "./Components/AppHeader";
import NoteList from "./Components/NoteList";
import AddNewNote from "./Components/AddNewNote";
// ---- import Notes Reducer
import notesReducer from "./reducers/noteReducer";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  const [notes, dispatch] = useReducer(notesReducer, []);

  //---- Add Note Function
  const addToNotes = (newNote) => {
    dispatch({ type: "ADD", payload: newNote });
  };
  // ---- Delete Function
  const deleteNote = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  // ---- Toggle Compeled Function
  const toggleCompeled = (event) => {
    const noteId = Number(event.target.value);
    dispatch({ type: "COMPLETE", payload: noteId });
  };

  return (
    <div className="bg-slate-200 min-h-screen h-full pb-8">
      <div className="container mx-auto text-center">
        <AppHeader
          notes={notes}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
        <div className="note-app pt-4 md:flex md:justify-between">
          <AddNewNote onAddToNotes={addToNotes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDeleteNote={deleteNote}
            onToggleCompeled={toggleCompeled}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
