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
