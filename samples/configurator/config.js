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
    { Name: "Cream", Class: "cream", colorValue: "26,90,55" },
    { Name: "Coffee", Class: "coffee", colorValue: "11,17,0" },
    { Name: "Salmon", Class: "salmon", colorValue: "4,66,10" },
    { Name: "Orange", Class: "orange", colorValue: "10,100,0" },
    { Name: "Berry", Class: "berry", colorValue: "342,98,17" },
    { Name: "Mauve", Class: "mauve", colorValue: "227,90,55" },
    { Name: "Purple", Class: "purple", colorValue: "238,83,00" },
    { Name: "Blue", Class: "blue", colorValue: "205,100,0" },
    { Name: "Fresh", Class: "fresh", colorValue: "167,83,0" },
    { Name: "Lime", Class: "lime", colorValue: "114,83,0" },
    { Name: "Sun", Class: "sun", colorValue: "55,68,13" }
  ];

  var content = document.getElementById('leather');

  colorSet.map((colorSet, index) => {
    var Name = colorSet.Name;
    var parentDiv = document.createElement('div');
    var pillDiv = document.createElement('div');
    let colorCl;
    colorCl = "icon-" + colorSet.Class + "-round";
    parentDiv.setAttribute('class', 'position-relative');
    pillDiv.setAttribute('class', 'position-absolute badge rounded-pill color-badge');

    var Node = document.createTextNode(Name);
    pillDiv.appendChild(Node);
    parentDiv.appendChild(pillDiv);

    var Input = document.createElement('input');
    Input.setAttribute('type', 'radio');
    Input.setAttribute('name', 'btnradio');
    Input.setAttribute('id', Name);
    Input.setAttribute('class', 'btn-check');
    Input.setAttribute('autocomplete', 'off');
    parentDiv.appendChild(Input);

    var Label = document.createElement('label');
    Label.setAttribute('class', colorCl + " btn-circle btn-round me-4");
    Label.setAttribute('for', Name);
    Label.setAttribute('data-role', 'leatherChange');
    Label.setAttribute('data-value', colorSet.colorValue);
    parentDiv.appendChild(Label);
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
  var imgbase = "{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/configurator/config-shoe.tif&width=940&effects=";

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



