import { useState } from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import NoteStatus from "./Components/NoteStatus";
import NoteList from "./Components/NoteList";
import AddNewNote from "./Components/AddNewNote";

function App() {
  const [isShowAddNote, setIsShowAddNote] = useState(false);
  return (
    <div className="bg-slate-200 h-screen">
      <div className="container mx-auto text-center">
        <AppHeader />
        <div className="note-app pt-4 bg-slate-200">
          {isShowAddNote && <AddNewNote />}
          <div className="add-new-note py-10 flex justify-center">
            <button
              className={` ${isShowAddNote?" bg-red-400":"bg-slate-600"}  text-slate-200 px-8 py-2 rounded-md hover:bg-slate-400 hover:text-slate-100 `}
              onClick={() => setIsShowAddNote((preveState)=>!preveState)}
            >
              {isShowAddNote?"Close Add Note":"Add New Note"}
            </button>
          </div>
          <div className="note-container">
            <NoteStatus />

            <NoteList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
