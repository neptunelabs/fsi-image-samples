document.addEventListener('DOMContentLoaded', (event) => {
  new Configurator()
})

class Configurator {
  constructor () {
    this.leathervalue = "4,66,10";
    this.suedevalue = "0,24,0";
    this.highlightvalue = "10,50,0";
    this.highlighttwovalue = "10,24,0";
    this.leathertwovalue = "11,17,0";
    initClick()
  }
}

function initClick() {
  const self = this
  document.querySelectorAll('[data-role]').forEach(function (el) {
    el.addEventListener('click', () => {
      self.changeColor(el)
    })
  })
}



function changeColor(el) {
  let img;
  let curImage = document.getElementById('image');
  var imgbase = "//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/configurator/config-shoe.tif&width=940&effects=";

  switch (el.dataset.role) {
    case 'leatherChange':
      this.leathervalue = el.dataset.value;
      break
    case 'leatherTwoChange':
      this.leathertwovalue = el.dataset.value;
      break
    case 'suedeChange':
      this.suedevalue = el.dataset.value;
      break
    case 'highlightChange':
      this.highlightvalue = el.dataset.value;
      break
    case 'highlightTwoChange':
      this.highlighttwovalue = el.dataset.value;
      break
  }

  img = imgbase + 'select(New,Alpha,1),colorize(' + this.leathervalue + '),select(New,Alpha,2),colorize(' + this.suedevalue + '),select(New,Alpha,3),colorize(' + this.highlightvalue + '),select(New,Alpha,4),colorize(' + this.leathertwovalue + '),select(New,Alpha,5),colorize(' + this.highlighttwovalue + ')';
  curImage.src = img;
}
