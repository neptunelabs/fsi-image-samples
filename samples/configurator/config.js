document.addEventListener('DOMContentLoaded', (event) => {
  new Configurator()
})

class Configurator {
  constructor () {
    addElements()
    initClick()
  }
}

function addElements() {
  const colorSet = [
    { name: "Cream", class: "cream", colorValue: "26,90,55" },
    { name: "Coffee", class: "coffee", colorValue: "11,17,0" },
    { name: "Salmon", class: "salmon", colorValue: "4,66,10" },
    { name: "Orange", class: "orange", colorValue: "10,100,0" },
    { name: "Berry", class: "berry", colorValue: "342,98,17" },
    { name: "Mauve", class: "mauve", colorValue: "227,90,55" },
    { name: "Purple", class: "purple", colorValue: "238,83,00" },
    { name: "Blue", class: "blue", colorValue: "205,100,0" },
    { name: "Fresh", class: "fresh", colorValue: "167,83,0" },
    { name: "Lime", class: "lime", colorValue: "114,83,0" },
    { name: "Sun", class: "sun", colorValue: "55,68,13" }
  ];

  let content = document.getElementById('leather');

  colorSet.map((colorSet, index) => {
    let name = colorSet.name;
    let parentDiv = document.createElement('div');
    let pillDiv = document.createElement('div');
    let colorCl;
    colorCl = "icon-" + colorSet.class + "-round";
    parentDiv.setAttribute('class', 'position-relative');
    pillDiv.setAttribute('class', 'position-absolute badge rounded-pill color-badge');

    let node = document.createTextNode(name);
    pillDiv.appendChild(node);
    parentDiv.appendChild(pillDiv);

    let input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'btnradio');
    input.setAttribute('id', name);
    input.setAttribute('class', 'btn-check');
    input.setAttribute('autocomplete', 'off');
    parentDiv.appendChild(input);

    let label = document.createElement('label');
    label.setAttribute('class', colorCl + " btn-circle btn-round me-4");
    label.setAttribute('for', name);
    label.setAttribute('data-role', 'leatherChange');
    label.setAttribute('data-value', colorSet.colorValue);
    parentDiv.appendChild(label);
    content.appendChild(parentDiv);
  });
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
  let imgbase = "{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/configurator/config-shoe.tif&width=940&effects=";

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



