import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const NoteList = () => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
  return (
    <>
      <div className=" border border-stone-400 rounded-lg p-4 mt-4 mx-4 shadow-lg max-w-screen-md lg:mx-auto">
        <div className="flex justify-around p-4">
          <div >
            <div className="font-bold text-xl">Note One</div>
            <div className="text-slate-400">Note Desc</div>
          </div>
          <div className="flex items-center gap-x-4">
            <div><RiDeleteBinLine className="text-2xl text-red-400"  /></div>
            <input className="h-4 w-4 text-blue-500 bg-gray-300" type="checkbox" name="" id="" />
          </div>
        </div>
        <hr className="bg-slate-600 h-0.5" />
        <div className="text-slate-500">{new Date().toLocaleDateString("en-US", options)}</div>
      </div>
    </>
  );
};

export default NoteList;
