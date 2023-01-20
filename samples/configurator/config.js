document.addEventListener('DOMContentLoaded', () => {
  generateSelector()
  document.getElementById('image').src = getColorizeImage(clipColors)
})

const baseImgPath = '{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/configurator/'
const imgWidth = 660
const clipColors = []

const thumb = {
  width: 126, on: "0,100,0", off: "0,0,80"
}

const productData = {
  name: 'config-shoe.tif', colors: {
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
  },
  colorSets: [{
    desc: 'Back',
    clippingPath: 1,
    selected: 'blue',
    colors: ['cream', 'coffee', 'salmon', 'orange', 'berry', 'mauve', 'purple', 'blue', 'fresh', 'lime', 'sun'],
  }, {
    desc: 'Suede', clippingPath: 2, selected: 'blue', colors: ['coffee', 'salmon', 'berry', 'mauve', 'blue', 'sun'],
  }, {
    desc: 'Finish',
    clippingPath: 3,
    selected: 'orange',
    colors: ['coffee', 'salmon', 'orange', 'berry', 'mauve', 'blue', 'fresh', 'lime'],
  }, {
    desc: ' Velvet',
    clippingPath: 4,
    selected: 'blue',
    colors: ['cream', 'coffee', 'salmon', 'berry', 'mauve', 'blue', 'fresh', 'sun'],
  }, {
    desc: ' Side',
    clippingPath: 5,
    selected: 'orange',
    colors: ['cream', 'coffee', 'salmon', 'orange', 'berry', 'mauve', 'purple', 'blue', 'fresh', 'lime', 'sun'],
  },]
}

const generateSelector = () => {
  const colorSelector = document.getElementById('colorSelector')

  for (const colorSet of productData.colorSets) {
    const selectorEl = document.createElement('div')
    selectorEl.className = 'row'

    const headlineCntEl = document.createElement('div')
    headlineCntEl.className = 'col-12 col-lg-3 pb-3 text-center'
    selectorEl.appendChild(headlineCntEl)

    const headlineImgEl = document.createElement('img')
    headlineImgEl.className = 'shadow-sm'
    headlineImgEl.setAttribute('alt', '')
    headlineImgEl.setAttribute('width', thumb.width)
    headlineImgEl.setAttribute('src', getThumbImage(colorSet.clippingPath))
    headlineCntEl.appendChild(headlineImgEl)

    const headlineTxtEl = document.createElement('h1')
    headlineTxtEl.className = 'display-6'
    headlineTxtEl.innerText = colorSet.desc
    headlineCntEl.appendChild(headlineTxtEl)

    const colorsEl = document.createElement('div')
    colorsEl.className = 'col-12 col-lg-9 btn-group pb-3'
    colorsEl.setAttribute('role', 'group')
    selectorEl.appendChild(colorsEl)

    const colorsElSub = document.createElement('div')
    colorsElSub.className = 'container-fluid'
    colorsEl.appendChild(colorsElSub)

    for (const colorKey of colorSet.colors) {
      const color = productData.colors[colorKey]
      const colorWrapEl = document.createElement('div')
      colorWrapEl.className = 'd-inline-flex position-relative'

      const labelNameEl = document.createElement('div')
      labelNameEl.className = 'opacity-75 badge text-bg-secondary position-absolute top-0 center translate-middle rounded-pill'
      labelNameEl.innerText = color.name
      colorWrapEl.appendChild(labelNameEl)

      const radioEl = document.createElement('input')
      radioEl.id = 'btn-' + colorSet.clippingPath + '-' + color.name
      radioEl.setAttribute('type', 'radio')
      radioEl.name = 'radio-grp-' + colorSet.clippingPath
      radioEl.className = 'btn-check'
      if (colorSet.selected === colorKey) {
        radioEl.checked = true
        clipColors[colorSet.clippingPath] = color.hsb
      }
      radioEl.addEventListener('click', () => {
        clipColors[colorSet.clippingPath] = color.hsb
        document.getElementById('image').src = getColorizeImage(clipColors)
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

const getColorizeImage = (clipColors) => {
  const clipEffects = []
  clipColors.map((hsb, path) => {
    clipEffects.push('select(New,Alpha,' + path + '),colorize(' + hsb + ')')
  })
  return baseImgPath + productData.name + '&width=' + imgWidth + '&effects=' + clipEffects.join(',')
}

const getThumbImage = (clipPath) => {
  const clipEffects = []
  for (const area of productData.colorSets) {
    const hsb = (clipPath === area.clippingPath) ? thumb.on : thumb.off
    clipEffects.push('select(New,Alpha,' + area.clippingPath + '),colorize(' + hsb + ')')
  }
  return baseImgPath + productData.name + '&width=' + thumb.width + '&effects=' + clipEffects.join(',')
}
