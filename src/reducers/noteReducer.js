export default function notesReducer(notes, { type, payload }) {
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
