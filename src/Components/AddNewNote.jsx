import React, { useState } from "react";
import { useNotes } from "../context/noteContext";

const AddNewNote = () => {

  const {dispatch} = useNotes();
  // ---- States
  const [isShowAddNote, setIsShowAddNote] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [newDesc, setNewDesc] = useState("");
  // --- New Note Function
  const addHandler = (e) => {
    e.preventDefault();
    if (!newNote || !newDesc) {
      return;
    }
    let NewNote = {
      titel: newNote,
      desc: newDesc,
      id: Date.now(),
      completed: false,
      createdAt: Date.now(),
    };
    dispatch({ type: "ADD", payload: NewNote });
    setNewNote("");
    setNewDesc("");
    // console.log(NewNote);
  };
  // ------- Toggel show Button Handy size Function
  const toggelShow = () => setIsShowAddNote((preveState) => !preveState);

  return (
    <div className=" md:w-1/3 md:max-w-96">
      <form
        className={`flex flex-col gap-4 p-4  ${!isShowAddNote ? "hidden" : ""} md:flex`}
        onSubmit={addHandler}
      >
        <h3 className="font-bold text-slate-600 mb-4">Add New Notes</h3>
        <input
          className="block w-full h-10 rounded-md px-4"
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter Tittel Note"
        />
        <input
          className="block w-full h-10 rounded-md px-4"
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          placeholder="Enter Description"
        />
        <button
          className=" bg-blue-400 text-slate-200 py-2 rounded-md hover:bg-blue-500 hover:text-slate-100"
          type="submit"
        >
          Add
        </button>
      </form>

      <ShowButton isShowAddNote={isShowAddNote} toggelShow={toggelShow} />
    </div>
  );
};

export default AddNewNote;

// -------- Show Button Component

const ShowButton = ({ isShowAddNote, toggelShow }) => {
  return (
    <div className="add-new-note py-10 flex justify-center md:hidden">
      <button
        className={` ${
          isShowAddNote ? " bg-red-400 hover:bg-red-500" : "bg-slate-600 hover:bg-blue-500"
        }  text-slate-200 px-8 py-2 rounded-md  hover:text-slate-100 `}
        onClick={toggelShow}
      >
        {isShowAddNote ? "Close Add Note" : "Add New Note"}
      </button>
    </div>
  );
};
