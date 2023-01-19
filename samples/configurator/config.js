document.addEventListener('DOMContentLoaded', (event) => {
  addElements()
  colorizeImage()
})

const baseImgPath = '{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/configurator/'
const imgName = 'config-shoe.tif'
const imgWidth = 660
const clipColors = []

const colors = {
  cream: { name: 'Cream', rgb: '251,217,193' },
  coffee: { name: 'Coffee', rgb: '150,115,106' },
  salmon: { name: 'Salmon', rgb: '227,134,126' },
  orange: { name: 'Orange', rgb: '253,106,75' },
  berry: { name: 'Berry', rgb: '252,118,159' },
  mauve: { name: 'Mauve', rgb: '185,202,249' },
  purple: { name: 'Purple', rgb: '143,146,243' },
  blue: { name: 'Blue', rgb: '63,173,252' },
  fresh: { name: 'Fresh', rgb: '96,233,203' },
  lime: { name: 'Lime', rgb: '110,245,92' },
  sun: { name: 'Sun', rgb: '248,233,115' },
  sand: { name: 'Sand', rgb: '183,140,138' },
  ivory: { name: 'Ivory', rgb: '218,198,194' },
  rose: { name: 'Rose', rgb: '236,209,197' },
}

const colorSets = [{
  desc: 'Leather Upper 1',
  img: {
    src: 'leather-upper.png', height: 44,
  },
  clippingPath: 1,
  selected: colors.cream,
  colors: [colors.cream, colors.coffee, colors.salmon, colors.orange, colors.berry, colors.mauve, colors.purple, colors.blue, colors.fresh, colors.lime, colors.sun],
}, {
  desc: 'Leather Upper 2',
  img: {
    src: 'leather-upper1.png', height: 44,
  },
  clippingPath: 2,
  selected: colors.coffee,
  colors: [colors.coffee, colors.salmon, colors.orange, colors.berry, colors.mauve, colors.purple, colors.blue, colors.fresh, colors.lime, colors.sun],
}, {
  desc: 'Suede',
  img: {
    src: 'suede-upper.png', height: 44,
  },
  clippingPath: 3,
  selected: colors.salmon,
  colors: [colors.cream, colors.coffee, colors.salmon, colors.orange, colors.berry, colors.mauve, colors.purple, colors.blue, colors.fresh, colors.lime, colors.sun],
}, {
  desc: ' Highlight 1',
  img: {
    src: 'highlight.png', height: 44,
  },
  clippingPath: 4,
  selected: colors.berry,
  colors: [colors.cream, colors.coffee, colors.salmon, colors.orange, colors.berry, colors.mauve, colors.purple, colors.blue, colors.fresh, colors.lime, colors.sun],
}, {
  desc: ' Highlight 2',
  img: {
    src: 'highlight1.png', height: 44,
  },
  clippingPath: 5,
  selected: colors.mauve,
  colors: [colors.cream, colors.coffee, colors.salmon, colors.orange, colors.berry, colors.mauve, colors.purple, colors.blue, colors.fresh, colors.lime, colors.sun],
}]

const addElements = () => {

  const colorSelector = document.getElementById('colorSelector')

  for (const area of colorSets) {
    const selectorEl = document.createElement('div')
    selectorEl.className = 'pb-1 border-custom'

    const headlineCntEl = document.createElement('div')
    headlineCntEl.className = 'pb-3'
    selectorEl.appendChild(headlineCntEl)

    const headlineImgEl = document.createElement('img')
    headlineImgEl.setAttribute('alt', '')
    headlineImgEl.setAttribute('height', area.img.height)
    headlineImgEl.setAttribute('src', baseImgPath + area.img.src + '&height=' + area.img.height)
    headlineCntEl.appendChild(headlineImgEl)

    const headlineTxtEl = document.createElement('span')
    headlineTxtEl.className = 'm-4'
    headlineTxtEl.innerText = area.desc
    headlineCntEl.appendChild(headlineTxtEl)

    // <div aria-label='Leather 2 Upper Buttons' class='btn-group pb-3' id='leather2' role='group'>
    const colorsEl = document.createElement('div')
    colorsEl.className = 'btn-group pb-3'
    colorsEl.setAttribute('role', 'group')
    selectorEl.appendChild(colorsEl)

    for (const color of area.colors) {

      const colorWrapEl = document.createElement('div')
      colorWrapEl.className = 'position-relative'

      const labelNameEl = document.createElement('div')
      labelNameEl.className = 'position-absolute badge rounded-pill color-badge'
      labelNameEl.innerText = color.name
      colorWrapEl.appendChild(labelNameEl)

      const radioEl = document.createElement('input')
      radioEl.id = 'btn-' + area.clippingPath + '-' + color.name
      radioEl.setAttribute('type', 'radio')
      radioEl.name = 'radio-grp-' + area.clippingPath
      radioEl.className = 'btn-check'
      if (area.selected == color) {
        radioEl.checked = true
        clipColors[area.clippingPath] = rgbToColorize(color.rgb)
      }
      radioEl.addEventListener('click', () => {
        colorizeImage(area.clippingPath, color.rgb)
      })
      colorWrapEl.appendChild(radioEl)

      const labelEl = document.createElement('label')
      labelEl.className = 'btn-circle btn-round me-4'
      labelEl.style.backgroundColor = 'rgb(' + color.rgb + ')'
      labelEl.setAttribute('for', radioEl.id)
      colorWrapEl.appendChild(labelEl)

      colorsEl.appendChild(colorWrapEl)

    }

    colorSelector.appendChild(selectorEl)
  }
}

const colorizeImage = (clippingPath, rgbStr) => {

  let imgEl = document.getElementById('image')

  if (clippingPath && rgbStr) {
    const hsbStr = rgbToColorize(rgbStr)
    clipColors[clippingPath] = hsbStr
  }

  let imgSrc = baseImgPath + imgName + '&width=' + imgWidth

  const clipEffects = []
  clipColors.map((hsbStr, path) => {
    clipEffects.push('select(New,Alpha,' + path + '),colorize(' + hsbStr + ')')
  })
  imgSrc += '&effects=' + clipEffects.join(',')

  imgEl.src = imgSrc

}

const rgbToColorize = (rgbStr) => {

  const rgbSplit = rgbStr.split(',')

  const r = rgbSplit[0] / 255
  const g = rgbSplit[1] / 255
  const b = rgbSplit[2] / 255

  let l = Math.max(r, g, b)
  let s = l - Math.min(r, g, b)
  let h = s ? l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s : 0

  const res = [
    Math.round(60 * h < 0 ? 60 * h + 360 : 60 * h),
    Math.round(100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)),
    Math.round((100 * (2 * l - s)) / 2)
  ]

  res[2] = 0

  return res.join(',')
}
