document.addEventListener('DOMContentLoaded', (event) => {
  initClick()
})

function initClick() {
  document.querySelectorAll('[data-role]').forEach(function (el) {
    el.addEventListener('click', () => {
      changeColor(el)
    })
  })
}


function changeColor(el) {
  let img;
  let curImage = document.getElementById('image');
  var imgbase = "//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/configurator/config-shoe-by-artem-bondarchuk.tif&width=940&effects=";
  let leathervalue = "4,66,10";
  let suedevalue = "0,24,0";
  let highlightvalue = "10,50,0";
  switch (el.dataset.role) {
    case 'leatherChange':
      leathervalue = el.dataset.value;
      break
    case 'suedeChange':
      suedevalue = el.dataset.value;
      break
    case 'highlightChange':
      highlightvalue = el.dataset.value;
      break
  }

  console.log('leather selected: ', leathervalue);
  console.log('suede selected: ', suedevalue);
  console.log('hightlight selected: ', highlightvalue);
  img = imgbase + 'select(New,Alpha,1),colorize(' + leathervalue + '),select(New,Alpha,2),colorize(' + suedevalue + '),select(New,Alpha,3),colorize(' + highlightvalue + ')';
  console.log('image is:', img)
  curImage.src = img;
}
