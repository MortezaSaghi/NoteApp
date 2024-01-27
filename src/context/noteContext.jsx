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

// ------ Notes Context

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
}

// ------ useNotes Hook

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) throw new Error("ThemeContext was used outside of ThemeProvider");
  return context;
}
