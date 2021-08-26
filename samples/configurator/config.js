window.onload = function() {
  var icon = document.querySelectorAll('[data-role]');
  for (i = 0; i < icon.length; i++) {
    icon[i].addEventListener('click',changeColor, false);
  }
}


function changeColor() {
  alert('changeColor');
  const leather = document.querySelectorAll("[data-role='changeLeather']");
  const suede = document.querySelectorAll("[data-role='changeSuede']");
  const highlight = document.querySelectorAll("[data-role='changeHighlight']");
  let leathervalue = leather.dataset.value;

  console.log('leather selected: ', leather.dataset.value);
  console.log('suede selected: ', suede);
  console.log('highlight selected: ', highlight);
  img = imgbase + 'select(New,Alpha,1),colorize(' + leathervalue + '),select(New,Alpha,2),colorize(' + suede + '),select(New,Alpha,3),colorize(' + highlight + ')';
  console.log('image is:', img)
  curImage.src = img;
}


function handleChange(evt) {
  let img;
  let curImage = document.getElementById('image');
  var imgbase = "//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/configurator/config-shoe-by-artem-bondarchuk.tif&width=940&effects=";
  var leather = document.getElementById("inputLeather").value;
  var suede =  document.getElementById("inputSuede").value;
  var highlight =  document.getElementById("inputHighlight").value;
  console.log('leather selected: ', leather);
  console.log('suede selected: ', suede);
  console.log('highlight selected: ', highlight);
  img = imgbase + 'select(New,Alpha,1),colorize(' + leather + '),select(New,Alpha,2),colorize(' + suede + '),select(New,Alpha,3),colorize(' + highlight + ')';
  console.log('image is:', img)
  curImage.src = img;
}
