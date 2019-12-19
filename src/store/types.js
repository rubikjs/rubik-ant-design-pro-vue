export default [
  'SAVE_TOKEN',
  'REMOVE_TOKEN',
  'CHANGE_LANG',
  'GET_USER',
  'SET_THEME'
].reduce((o, key) => ({ ...o, [key]: key }), {})
