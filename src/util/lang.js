import store from 'store'
import TYPES from 'store/types'
import i18n from 'i18n'

export function getLangJson (lang) {
  return import(/* webpackChunkName: "i18n/[request]" */ `i18n/${lang}.json`)
}

export function getLang (lang) {
  return getLangJson(lang).then((messages) => {
    i18n.locale = lang
    i18n.setLocaleMessage(lang, messages.default)
    store.commit(TYPES.CHANGE_LANG, lang)
  })
}
