import { useNotes } from "../context/noteContext";

const AppHeader = ({ sortBy, onSort }) => {
  const notes = useNotes();
  return (
    <div className=" min-[380px]:flex justify-around  py-8 border-solid border-b-2 border-slate-50 mb-8 lg:mb-14">
      <h1 className="text-2xl sm:text-4xl font-bold">
        My Notes ({notes.length})
      </h1>
      <select
        value={sortBy}
        onChange={onSort}
        className="bg-slate-200 rounded-md py-0.5 text-xs sm:base border-2 border-solid border-slate-400"
      >
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
};

export default AppHeader;
