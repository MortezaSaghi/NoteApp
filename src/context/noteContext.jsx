import { createContext, useContext, useReducer } from "react";

// ------- Reducer

export function notesReducer(notes, { type, payload }) {
  switch (type) {
    case "ADD": {
      return [...notes, payload];
    }
    case "DELETE": {
      return notes.filter((note) => note.id !== payload);
    }
    case "COMPLETE": {
      return notes.map((note) =>
        note.id === payload
          ? { ...note, completed: !note.completed }
          : { ...note }
      );
    }
    default:
      throw new Error("Unknown Action : " + type);
  }
}

// ------ Notes Context Providers

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>{children}</NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

// -------- useNotes Hooks
// --- 1. Notes Hook
export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined)
    throw new Error("NotesContext was used outside of NotesProvider");
  return context;
}
//---- 2. Dispatch Hook
export function useNotesDispatch() {
  const context = useContext(NotesDispatchContext);
  if (context === undefined)
    throw new Error(
      "NoteDispatchContext was used outside of NotesDispatchProvider"
    );
  return context;
}
