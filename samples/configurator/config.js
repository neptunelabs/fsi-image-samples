document.addEventListener('DOMContentLoaded', (event) => {
  new Configurator()
})

class Configurator {
  constructor () {
    this.leathervalue = "4,66,10";
    this.suedevalue = "0,24,0";
    this.highlightvalue = "10,50,0";
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
  var imgbase = "//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/configurator/config-shoe-by-artem-bondarchuk.tif&width=940&effects=";

  switch (el.dataset.role) {
    case 'leatherChange':
      this.leathervalue = el.dataset.value;
      break
    case 'suedeChange':
      this.suedevalue = el.dataset.value;
      break
    case 'highlightChange':
      this.highlightvalue = el.dataset.value;
      break
  }

  img = imgbase + 'select(New,Alpha,1),colorize(' + this.leathervalue + '),select(New,Alpha,2),colorize(' + this.suedevalue + '),select(New,Alpha,3),colorize(' + this.highlightvalue + ')';
  curImage.src = img;
}
