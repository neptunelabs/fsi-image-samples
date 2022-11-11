function changeImage(buttonID) {
  let img
  let curImage = document.getElementById('image')
  switch (buttonID) {
    case '0':
      img = '{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=940'
      break
    case '1':
      img = '{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/furniture/home-7531467.jpg&width=940'
      break
    case '2':
      img = '{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/furniture/home-7531463.jpg&width=940'
      break
    default:
      img = '{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=940'
  }
  curImage.src = img
}
