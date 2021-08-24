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

function handleColor(evt) {
  let img;
  let curImage = document.getElementById('image');
  var imgbase = "//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/configurator/config-shoe-by-artem-bondarchuk.tif&width=940&effects=";
  var leather = document.getElementById("leatherInput").value;
  var suede = document.getElementById("suedeInput").value;
  var highlight = document.getElementById("highlightInput").value;
  img = imgbase + 'select(New,Alpha,1),colorize(' + hexToHSL(leather) + '),select(New,Alpha,2),colorize(' + hexToHSL(suede) + '),select(New,Alpha,3),colorize(' +  hexToHSL(highlight) + ')';
  console.log('image is:', img)
  curImage.src = img;

}

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
    cmax = Math.max(r,g,b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(0);
  l = +(l * 100).toFixed(0);

  return h + "," + s + "," + l;
}
