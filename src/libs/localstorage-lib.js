/**
 * @description Pequena lib para facilitar o uso
 * do localstorage.
 * @author Luiz Alberto (onluiz)
 */
const localstorageLib = (() => {
  const stringify = val => JSON.stringify(val);
  const parse = val => JSON.parse(val);
  const addItem = (key, item) => localStorage.setItem(key, stringify(item));
  const getItem = key => parse(localStorage.getItem(key));
  return {
    addItem,
    getItem,
  };
})();

export default localstorageLib;
