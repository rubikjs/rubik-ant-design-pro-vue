export default [
  'SAVE_TOKEN',
  'REMOVE_TOKEN',
  'CHANGE_LANG',
  'GET_USER'
].reduce((o, key) => ({ ...o, [key]: key }), {})
