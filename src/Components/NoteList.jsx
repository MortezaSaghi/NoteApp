import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const NoteList = ({ notes, onDeleteNote, onToggleCompeled }) => {
  return (
    <div className="max-w-screen-md lg:mx-auto md:w-2/3">
      <h2 className="font-bold text-slate-600 mb-4 text-xl">Notes</h2>
      <NoteStatus notes={notes} />
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDeleteNote={onDeleteNote}
          onToggleCompeled={onToggleCompeled}
        />
      ))}
    </div>
  );
};

export default NoteList;



// ------------------------------------------------------------------------------------ Note Item Component

export const NoteItem = ({ note, onDeleteNote, onToggleCompeled }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className=" border bg-slate-50 rounded-lg p-4 mt-4 mx-4 shadow-xl ">
      <div className="flex justify-between px-8">
        <div className="text-start">
          <div
            className={`font-bold text-xl ${
              note.completed ? "line-through text-slate-400" : ""
            } `}
          >
            {note.titel}
          </div>
          <div className="text-slate-400">{note.desc}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <div>
            <RiDeleteBinLine
              className="text-2xl text-red-400 cursor-pointer"
              onClick={() => onDeleteNote(note.id)}
            />
          </div>
          <input
            className="h-4 w-4 text-blue-500 bg-gray-300 cursor-pointer"
            type="checkbox"
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={onToggleCompeled}
          />
        </div>
      </div>
      <hr className="bg-slate-300 h-0.5" />
      <div className="text-slate-500 text-start ms-4">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
};

// ------------------------------------------------------------------------------------ Status Component
export const NoteStatus = ({ notes }) => {
  const [activeTabe, setActiveTab] = useState("all");

  const allNotes = notes.length;
  const compeleNotes = notes.filter((note) => note.completed).length;
  const unCompletedNotes = allNotes - compeleNotes;

  if (!allNotes) return <div>No Notes has already been added. </div>;

  return (
    <ul className="note-status flex justify-around items-center py-2  text-l font-bold text-slate-500 cursor-pointer">
      <li
        className={`${
          activeTabe === "all" ? "border-solid border-b-4 border-blue-300" : ""
        } transition duration-700 ease-in-out`}
        onClick={() => setActiveTab("all")}
      >
        All<span className="bg-slate-100 p-0.5 rounded-md ">{allNotes}</span>
      </li>
      <li
        className={`${
          activeTabe === "completed"
            ? "border-solid border-b-4 border-blue-300"
            : ""
        } transition duration-700 ease-in-out`}
        onClick={() => setActiveTab("completed")}
      >
        Completed
        <span className="bg-slate-100 p-0.5 rounded-md ">{compeleNotes}</span>
      </li>
      <li
        className={`${
          activeTabe === "open" ? "border-solid border-b-4 border-blue-300" : ""
        } transition duration-700 ease-in-out`}
        onClick={() => setActiveTab("open")}
      >
        Open
        <span className="bg-slate-100 p-0.5 rounded-md ">
          {unCompletedNotes}
        </span>
      </li>
    </ul>
  );
};
