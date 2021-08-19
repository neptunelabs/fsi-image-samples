


function changeImage(buttonID) {
  let img;
  let lea = "select(New,Alpha,1),colorize(4,66,10)";
  let sue = "select(New,Alpha,2),colorize(0,24,0)";
  let hi = "select(New,Alpha,3),colorize(10,50,0)";
  let curImage = document.getElementById('image');
  var imgbase = "//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/configurator/config-shoe-by-artem-bondarchuk.tif&width=940&effects=";
  switch (buttonID) {
    case "0-0":
      lea = "select(New,Alpha,1),colorize(10,100,0)";
      break
    case "0-1":
      lea =  "select(New,Alpha,1),colorize(205,100,0)";
      break
    case "1-0":
      sue =  "select(New,Alpha,2),colorize(167,55,0)";
      break
    case "1-1":
      sue = "select(New,Alpha,2),colorize(114,57,0)";
      break
    case "2-0":
      hi =  "select(New,Alpha,3),colorize(115,41,0)";
      break
    case "2-1":
      hi =  "select(New,Alpha,3),colorize(238,61,00)";
      break

  }
  img = imgbase + lea + ',' + sue + ',' + hi;
  console.log('image is:', img)
  curImage.src = img;
}



