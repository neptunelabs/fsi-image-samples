function changeImage(buttonID) {
  let img
  let curImage = document.getElementById('image')
  switch (buttonID) {
    case '0':
      img =
        'https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=539'
      break
    case '1':
      img =
        'https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/home-7531467.jpg&width=539'
      break
    case '2':
      img =
        'https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/home-7531463.jpg&width=539'
      break
    default:
      img =
        'https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=539'
  }
  curImage.src = img
}
