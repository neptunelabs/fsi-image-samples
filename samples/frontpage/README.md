# Frontpage - Embedding images using Single Source Imaging

This readme describes how the front page sample with *Single Source Imaging* of *FSI Server* is achieved.
The aim of the demo is to show how you can easily integrate different sizes and formats of an image by simply changing the Image URL.
It also shows how static assets saved on FSI Server can be embedded.

# Add your images/ assets to FSI Server

First, you'll need to upload the images you want to use to FSI Server.
You can install a [demo version](https://www.neptunelabs.com/get/) via Docker or use our [online demo server](https://demo.fsi-server.com/fsi/interface/) to try it out first.

It's important to use the correct source connector for your images:

- *Storage*: images will be imported to the storage for high performance Single Source Imaging
- *Static*: for static files only, e.g. style graphics you want to use on your website

# Uploading images

Depending on the type of the selected source connector, you can upload different types of files. There are several possibilities to upload images into the interface.

- Choose the Upload tab, click the "Choose files" button to add files to upload to the list. The files will be uploaded to the current folder.
- Drag & Drop files to the file view or the tree view

# Use images on the website

While having an image or folder selected, you can see all possible publishing ways for the specific item by visting the Publish To Web tab.
For this example, select the preset *Simple Image*:

Simple Image publishes the image with a simple <img< tag. Requires a single high resolution image. You can set the output dimensions and format (auto automatically chooses the best format for the browser used, or you can set WEBP, JPEG, PNG or GIF) as well as add various effects to the static image.


The *Source Code* section enables you to control the look of your image or viewer by setting the dimensions and format, as well as adding effects or crop options to it.
In this area you also can see the source code for your selected publishing option which you can edit and copy to publish the images.

You can then add the images to your site via image tag:

```html
 <img class="card-img-top img-fluid" src="//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-boFO5uIUKUU-unsplash.jpg&width=283" alt="" width="283">
```

# Changing the colors

The **config.js** script embedded deals with the changing of the colors:

```html
<script src="config.js"></script>
```

First, we set an EventListener as soon as the DOM is loaded:

```javascript
document.addEventListener('DOMContentLoaded', (event) => {
  new Configurator()
})
```

Then we set the class with *initClick* and define the function:

```javascript
class Configurator {
  constructor () {
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
```
The function *initClick* uses a query selector, which selects the data-role and adds
an EventListener to it. If clicked, the function *changeColor* is called:

```javascript
function changeColor(el) {
  let img;
  let curImage = document.getElementById('image');
  var imgbase = "//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/configurator/config-shoe.tif&width=940&effects=";
```

We get the current image with the corresponding ID and set an imagebase.

```javascript
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
```

The switch defines what happens if a particular data-role is clicked. This way, the five
different values are set.

```javascript
  img = imgbase + 'select(New,Alpha,1),colorize(' + this.leathervalue + '),select(New,Alpha,2),colorize(' + this.suedevalue + '),select(New,Alpha,3),colorize(' + this.highlightvalue + '),select(New,Alpha,4),colorize(' + this.leathertwovalue + '),select(New,Alpha,5),colorize(' + this.highlighttwovalue + ')';
curImage.src = img;
}
```

The image is now build from adding the imagebase, the effect itself (select(New,Alpha,1),colorize(color)) and the accompanying values retrieved from the switch.
Then the current image is replaced with the newly built image.

# Defining the color values

You can use the FSI Server Interface to determine the color values you need:
Select the image with the Alpha Channels, and got to the Publish tab and choose *Simple Image* from the templates
on the right.

![Config Image](readme-config-1.png)

In the *Your Source Code* section, choose the icon for image effects (see above).

In the modal, go to the *Select* effect and add it via drag and drop to the left.
Choose as Type of Range *Alpha Channel* and select the Alpha Channel you want to use:

![Config Image 2](readme-config-2.png)

Now, add the Colorize Effect to your effect list.
By changing the Hue, Saturation and Lightness you can instantly see the changes in the
preview window:

![Config Image 3](readme-config-3.png)

You can add as many selections/colorizations on top as you like.
The only thing you need to keep in mind is the correct order:
first add the Alpha Channel via Select, than add Colorize.

At the end, your image URL could look something like this:

[https://fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/configurator/config-shoe.tif&width=940&effects=select(New,Alpha,1),colorize(4,66,10),select(New,Alpha,2),colorize(0,24,0),select(New,Alpha,3),colorize(10,50,0),select(New,Alpha,4),colorize(11,17,0),select(New,Alpha,5),colorize(10,24,0)](https://fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/configurator/config-shoe.tif&width=940&effects=select(New,Alpha,1),colorize(4,66,10),select(New,Alpha,2),colorize(0,24,0),select(New,Alpha,3),colorize(10,50,0),select(New,Alpha,4),colorize(11,17,0),select(New,Alpha,5),colorize(10,24,0))


## Testing with examples from  your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
