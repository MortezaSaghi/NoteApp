import { useReducer, useState } from "react";
import "./App.css";
//--- import Componnets
import AppHeader from "./Components/AppHeader";
import NoteList from "./Components/NoteList";
import AddNewNote from "./Components/AddNewNote";
// ---- import Notes Reducer
import {notesReducer} from "./context/noteContext"
import { NotesProvider } from "./context/noteContext";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  const [notes, dispatch] = useReducer(notesReducer, []);

 
  return (
    <NotesProvider>
      <div className="bg-slate-200 min-h-screen h-full pb-8">
      <div className="container mx-auto text-center">
        <AppHeader
          notes={notes}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
        <div className="note-app pt-4 md:flex md:justify-between">
          <AddNewNote  />
          <NoteList
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
    </NotesProvider>
  );
}

export default App;
