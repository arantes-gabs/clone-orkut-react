const FontFaceObserver = require("fontfaceobserver")

const fonts = [
  {
    name: "Fira Sans",
    weight: 400,
  },
]

;(() => {
  const asyncFonts = fonts.map((font) => {
    const { name } = font
    return new FontFaceObserver(name, { ...font }).load()
  })

  return Promise.all(asyncFonts)
    .then(() => document.body.classList.add("-fonts-loaded"))
    .catch((err) => console.error(`Error when loading fonts: ${err}`))
})()
