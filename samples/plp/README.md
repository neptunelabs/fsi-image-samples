# Product Listing Page - Embedding images using Single Source Imaging

This readme describes how the product listing page example is achieved using _Single Source Imaging_ from _FSI Server_.
The aim of the demo is to show how you can easily integrate different sizes and formats of an image by simply changing the image URL.
It also shows how to use a Crop effect.

# Adding images

After uploading the images to the FSI Server, add the images to your site using image tags:

```html
<img
  class="card-img-top img-fluid"
  src="//docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/furniture-6048139.jpg&width=342"
  alt=""
  width="342"
/>
```

You can change the width and/or height directly in the image tag and the image will be scaled accordingly.

You can also use srcSets with the image tag:

```html
<img
  class="zoom card-img-top img-fluid"
  src="https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/furniture-6048139.jpg&width=342&rect=0.30008,0,0.69992,1"
  width="342"
  srcset="
    https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/furniture-6048139.jpg&width=342&rect=0.30008,0,0.69992,1,
    https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/furniture-6048139.jpg&width=684&rect=0.30008,0,0.69992,1 2x
  "
  alt=""
/>
```

# Adding a crop effect

As you can see in the image tag above, a crop effect has been used:

```html
<img
  class="zoom card-img-top img-fluid"
  src="https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/furniture-6048139.jpg&width=342&rect=0.30008,0,0.69992,1"
  width="342"
  alt=""
/>
```

The `&rect=0.30008,0,0.69992,1` defines the crop effect.

You can easily do this in the _Publish to Web_ tab. With _Simple Image_ selected as the default,
select the Crop icon in the Source Code toolbar.

![Config Image](../plp/readme-pdp-4.png)

In the modal you can drag and drop the crop area onto the image.
Select OK when you are finished.

![Config Image](../plp/readme-pdp-5.png)

The URL created will look like this:

[https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&width=480&rect=0.15187,0,0.84813,1](https://docs.neptunelabs.comp/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&width=480&rect=0.15187,0,0.84813,1)

The _&rect=_ part defines the area of the cropping.

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
