document.addEventListener('DOMContentLoaded', (event) => {
  addElements()
  colorizeImage()
})

const baseImgPath = '{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/configurator/'
const imgName = 'config-shoe.tif'
const imgWidth = 660
const clipColors = []

const colors = {
  cream: {name: 'Cream', rgb: '251,217,193', hsb: '26,90,55'},
  coffee: {name: 'Coffee', rgb: '150,115,106', hsb: '11,17,0'},
  salmon: {name: 'Salmon', rgb: '227,134,126', hsb: '4,66,10'},
  orange: {name: 'Orange', rgb: '253,106,75', hsb: '10,100,0'},
  berry: {name: 'Berry', rgb: '252,118,159', hsb: '342,98,17'},
  mauve: {name: 'Mauve', rgb: '185,202,249', hsb: '227,90,55'},
  purple: {name: 'Purple', rgb: '143,146,243', hsb: '238,83,0'},
  blue: {name: 'Blue', rgb: '63,173,252', hsb: '205,100,0'},
  fresh: {name: 'Fresh', rgb: '96,233,203', hsb: '167,83,0'},
  lime: {name: 'Lime', rgb: '110,245,92', hsb: '114,83,0'},
  sun: {name: 'Sun', rgb: '248,233,115', hsb: '55,68,13'},
}

const colorSets = [{
  desc: 'Back',
  img: {
    src: 'leather-upper.png', height: 44,
  },
  clippingPath: 1,
  selected: colors.blue,
  colors: [colors.cream, colors.coffee, colors.salmon, colors.orange, colors.berry, colors.mauve, colors.purple, colors.blue, colors.fresh, colors.lime, colors.sun,],
}, {
  desc: 'Suede',
  img: {
    src: 'leather-upper1.png', height: 44,
  },
  clippingPath: 2,
  selected: colors.blue,
  colors: [colors.coffee, colors.salmon, colors.berry, colors.mauve, colors.blue, colors.sun,],
}, {
  desc: 'Finish',
  img: {
    src: 'suede-upper.png', height: 44,
  },
  clippingPath: 3,
  selected: colors.orange,
  colors: [colors.coffee, colors.salmon, colors.orange, colors.berry, colors.mauve, colors.blue, colors.fresh, colors.lime],
}, {
  desc: ' Velvet',
  img: {
    src: 'highlight.png', height: 44,
  },
  clippingPath: 4,
  selected: colors.blue,
  colors: [colors.cream, colors.coffee, colors.salmon, colors.berry, colors.mauve, colors.blue, colors.fresh, colors.sun,],
}, {
  desc: ' Side',
  img: {
    src: 'highlight1.png', height: 44,
  },
  clippingPath: 5,
  selected: colors.orange,
  colors: [colors.cream, colors.coffee, colors.salmon, colors.orange, colors.berry, colors.mauve, colors.purple, colors.blue, colors.fresh, colors.lime, colors.sun],
},]

const addElements = () => {
  const colorSelector = document.getElementById('colorSelector')

  for (const area of colorSets) {
    const selectorEl = document.createElement('div')
    selectorEl.className = 'row'

    const headlineCntEl = document.createElement('div')
    headlineCntEl.className = 'col-3 pb-3'
    selectorEl.appendChild(headlineCntEl)

    const headlineImgEl = document.createElement('img')
    headlineImgEl.setAttribute('alt', '')
    headlineImgEl.setAttribute('height', area.img.height)
    headlineImgEl.setAttribute('src', baseImgPath + area.img.src + '&height=' + area.img.height)
    headlineCntEl.appendChild(headlineImgEl)

    const headlineTxtEl = document.createElement('h1')
    headlineTxtEl.className = 'display-6'
    headlineTxtEl.innerText = area.desc
    headlineCntEl.appendChild(headlineTxtEl)

    // <div aria-label='Leather 2 Upper Buttons' class='btn-group pb-3' id='leather2' role='group'>
    const colorsEl = document.createElement('div')
    colorsEl.className = 'col-9 btn-group pb-3'
    colorsEl.setAttribute('role', 'group')
    selectorEl.appendChild(colorsEl)

    const colorsElSub = document.createElement('div')
    colorsElSub.className = 'container-fluid'
    colorsEl.appendChild(colorsElSub)

    for (const color of area.colors) {
      const colorWrapEl = document.createElement('div')
      colorWrapEl.className = 'd-inline-flex position-relative'

      const labelNameEl = document.createElement('div')
      labelNameEl.className = 'opacity-75 badge text-bg-secondary position-absolute top-0 center translate-middle rounded-pill'
      labelNameEl.innerText = color.name
      colorWrapEl.appendChild(labelNameEl)

      const radioEl = document.createElement('input')
      radioEl.id = 'btn-' + area.clippingPath + '-' + color.name
      radioEl.setAttribute('type', 'radio')
      radioEl.name = 'radio-grp-' + area.clippingPath
      radioEl.className = 'btn-check'
      if (area.selected === color) {
        radioEl.checked = true
        clipColors[area.clippingPath] = color.hsb
      }
      radioEl.addEventListener('click', () => {
        colorizeImage(area.clippingPath, color.hsb)
      })
      colorWrapEl.appendChild(radioEl)

      const labelEl = document.createElement('label')
      labelEl.className = 'demo-btn-circle me-4'
      labelEl.style.backgroundColor = 'rgb(' + color.rgb + ')'
      labelEl.setAttribute('for', radioEl.id)
      colorWrapEl.appendChild(labelEl)

      colorsElSub.appendChild(colorWrapEl)
    }

    colorSelector.appendChild(selectorEl)

    const dividerEl = document.createElement('hr')
    dividerEl.className = 'mt-1 mb-5'
    colorSelector.appendChild(dividerEl)
  }

}

const colorizeImage = (clippingPath, hsbStr) => {
  let imgEl = document.getElementById('image')

  if (clippingPath && hsbStr) {
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
