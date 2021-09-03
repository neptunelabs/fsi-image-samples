# Configurator - Images with Alpha Channels

This readme describes how the configurator sample with *Single Source Imaging* of *FSI Server* is achieved.
The aim of the demo is to show how Alpha Channels can be adressed by simply changing the Image URL and using Image Effects.

# Adding Alpha Channels to your image

First, it's important to set up the Alpha Channels for your image. This can be achieved by using a
photo editing software like Photoshop.

A quick description how to do this in Photoshop:

- open your image
- with the Selection Tool, select the area you want to have as an Alpha Channel
- click on the tab *Channels*
- Use the *Save Selection As Channel* button
- Name your channel accordingly
- Add as many channels as you need
- save your image as *.tif
- upload image to your FSI Server

# Building the configurator

For this sample, we have used Bootstrap in order to create a sample website framework.

The image is embedded like this:

```html
 <img id="image" class="img-fluid" src="//fsi-site.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/configurator/config-shoe.tif&width=940" width="940" alt="">
```

For each Alpha Channel (e.g. Leather Upper 1, Suede, etc) there is an area where you can choose
between different colors.
We allocated a data-role and a data-value to the color icons:

```html
<div id="leather">
  <span class="position-relative">
    <i data-role="leatherChange" data-value="26,90,55" class="bi bi-circle-fill icon-cream-round thumb-icon pt-3">
    </i>
    <span class="position-absolute translate-middle badge rounded-pill color-badge">
      Cream
    </span>
  </span>
  <span class="position-relative">
    <i data-role="leatherChange" data-value="11,17,0" class="bi bi-circle-fill icon-coffee-round thumb-icon pt-3">
    </i>
    <span class="position-absolute translate-middle badge rounded-pill color-badge">
      Coffee
    </span>
  </span>
  <span class="position-relative">
    <i data-role="leatherChange" data-value="4,66,10" class="bi bi-circle-fill icon-salmon-round thumb-icon pt-3">
    </i>
    <span class="position-absolute translate-middle badge rounded-pill color-badge">
      Salmon
    </span>
  </span>
</div>

```
The icons also get a color badge with the second *span* implemented.

There are five different categories which each have a different data-role:

- Leather Upper 1 -> leatherChange
- Leather Upper 1 -> leatherTwoChange
- Suede -> suedeChange
- Highlight 1 -> highlightChange
- Highlight 2 -> highlightTwoChange

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
