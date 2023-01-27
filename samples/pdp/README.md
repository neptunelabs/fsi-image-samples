# Product Detail Page - Embedding images using Single Source Imaging

This readme describes how the product detail page example is achieved using *Single Source Imaging* from *FSI Server*.
The aim of the demo is to show how you can easily integrate different sizes and formats of an image by simply changing the image URL.

# Switching images on the website

The images are swapped by adding a simple changeImage function to the image tags:

```html
  <div class="row pb-3">
            <div class="col-4">
              <img class="thumbnail img-fluid" onclick="changeImage('0')" src="docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=150" width="150"
                   srcset="docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=150,
docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=300 2x"
                   alt="">

            </div>
            <div class="col-4" >
              <img class="thumbnail img-fluid" onclick="changeImage('1')" src="docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531467.jpg&width=150" width="150"
                                            srcset="docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531467.jpg&width=150,
docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531467.jpg&width=300 2x"
                                            alt="">

            </div>
            <div class="col-4" >
              <img class="thumbnail img-fluid" onclick="changeImage('2')" src="docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531463.jpg&width=150" width="150"
                   srcset="docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531463.jpg&width=150,
docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/nhome-7531463.jpg&width=300 2x"
                   alt="">

            </div>
          </div>
```

In the corresponding `pdp.js` this function is set:

```js
function changeImage(buttonID) {
  let img
  let curImage = document.getElementById('image')
  switch (buttonID) {
    case '0':
      img = 'docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=940'
      break
    case '1':
      img = 'docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531467.jpg&width=940'
      break
    case '2':
      img = 'docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531463.jpg&width=940'
      break
    default:
      img = 'docs.neptunelabs.com/server?type=image&source=images/samples/ssi/furniture/home-7531464.jpg&width=940'
  }
  curImage.src = img
}
```

## Testing with examples from  your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
