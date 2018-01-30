import ls from '@/libs/localstorage-lib';

/**
 * @description Lib para a gestão das notas
 * que o usuário do app adiciona no localstorage.
 * Futuramente ela pode ser descontinuada caso
 * esses dados passem a ser armazenados em um
 * banco de dados.
 * @author Luiz Alberto (onluiz)
 */
const notesLib = (() => {
  const getNotes = () => ls.getItem('notes');
  const addNotes = notes => ls.addItem('notes', notes);
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

export default notesLib;
