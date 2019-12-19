import { ENABLE_I18N } from 'config'
import i18n from 'i18n'
export function loadThemeStyle (name) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.setAttribute('class', 'theme-style')
    link.setAttribute('type', 'text/css')
    link.setAttribute('rel', 'stylesheet')
    link.addEventListener('load', () => {
      resolve()
    })
    link.addEventListener('error', () => {
      reject(new Error('load fail'))
    })
    document.body.appendChild(link)
    link.setAttribute('href', `/static/theme/${name}.css`)
  })
}

export function resetThemeStyle () {
  const links = document.querySelectorAll('link.theme-style')
  Array.from(links).forEach(link => link.remove())
}

export function getRouteText (route) {
  return (ENABLE_I18N && route.meta.i18n) ? i18n.t(route.meta.i18n) : route.meta.text
}
