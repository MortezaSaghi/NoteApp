import { RiDeleteBinLine } from "react-icons/ri";
import Massage from "./Massage";
import { useNotes, useNotesDispatch } from "../context/noteContext";

const NoteList = ({ sortBy }) => {
  const notes = useNotes();
  let sortedNotes = notes;
  if (sortBy === "earliest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
  if (sortBy === "latest") {
    sortedNotes = notes
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  if (sortBy === "completed") {
    sortedNotes = notes
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));
  }

  return (
    <div className="max-w-screen-md lg:mx-auto md:w-2/3">
      <h2 className="font-bold text-slate-600 mb-4 text-xl">Notes</h2>
      <NoteStatus />
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;

// ------------------------------------------------------------------------------------ Note Item Component

export const NoteItem = ({ note }) => {
  const dispatch = useNotesDispatch();
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
              onClick={() => dispatch({ type: "DELETE", payload: note.id })}
            />
          </div>
          <input
            className="h-4 w-4 text-blue-500 bg-gray-300 cursor-pointer"
            type="checkbox"
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={(e) =>
              dispatch({ type: "COMPLETE", payload: Number(e.target.value) })
            }
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
export const NoteStatus = () => {
  const notes = useNotes();
  const allNotes = notes.length;
  const compeleNotes = notes.filter((note) => note.completed).length;
  const unCompletedNotes = allNotes - compeleNotes;

  if (!allNotes)
    return (
      <Massage>
        <div>No Notes has already been added. </div>
      </Massage>
    );

  return (
    <ul className="note-status flex justify-around items-center py-2  text-l font-bold text-slate-500 cursor-pointer">
      <li>
        All<span className="bg-slate-100 p-0.5 rounded-md ">{allNotes}</span>
      </li>
      <li>
        Completed
        <span className="bg-slate-100 p-0.5 rounded-md ">{compeleNotes}</span>
      </li>
      <li>
        Open
        <span className="bg-slate-100 p-0.5 rounded-md ">
          {unCompletedNotes}
        </span>
      </li>
    </ul>
  );
};
