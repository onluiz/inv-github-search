import ls from '@/libs/localstorage-lib';

/**
 * @description Essa lib deve ser utilizada para futuras
 * alterações referentes aos dados do github do usuário
 * logado. Além do token, poderá ser armazenado dados
 * sobre o profile do usuário e outras informações até
 * o momento em que se tornar necessário utilizar um
 * banco de dados de fato.
 * @author Luiz Alberto (onluiz)
 */
const authLib = (() => {
  const setToken = token => ls.addItem('token', token);
  return {
    setToken,
  };
})();

export default authLib;
