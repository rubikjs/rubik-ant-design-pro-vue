import Vue from 'vue'
export const BUS_EVENTS = [
  'CHANGE_LANG'
].reduce((o, key) => ({ ...o, [key]: key }), {})
export default new Vue()
