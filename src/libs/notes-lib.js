const localstorage = (() => {
  const addToLocalstorage = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
  };

  const getFromLocalstorage = key => JSON.parse(localStorage.getItem(key));

  const getNotes = () => getFromLocalstorage('notes');

  const addNotes = (notes) => {
    addToLocalstorage('notes', notes);
  };

  const addNote = (note, callback) => {
    let notes = getNotes();
    if (notes) {
      notes.push(note);
    } else {
      notes = [];
      notes.push(note);
    }
    addNotes(notes);
    callback();
  };

  return {
    addNote,
    getNotes,
  };
})();

export default localstorage;
