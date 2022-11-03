# Product Detail Page - Embedding images using Single Source Imaging

This readme describes how the product detail page sample with *Single Source Imaging* of *FSI Server* is achieved.
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

![Config Image](readme-pdp.png)

- Choose the Upload tab, click the "Choose files" button to add files to upload to the list. The files will be uploaded to the current folder.
- Drag & Drop files to the file view or the tree view

# Use images on the website

While having an image or folder selected, you can see all possible publishing ways for the specific item by visting the Publish To Web tab.
For this example, select the preset *Simple Image*:

![Config Image](readme-pdp-1.png)

Simple Image publishes the image with a simple <img> tag. Requires a single high resolution image. You can set the output dimensions and format (auto automatically chooses the best format for the browser used, or you can set WEBP, JPEG, PNG or GIF) as well as add various effects to the static image.

![Config Image](readme-pdp-2.png)

The *Source Code* section enables you to control the look of your image or viewer by setting the dimensions and format, as well as adding effects or crop options to it.
In this area you also can see the source code for your selected publishing option which you can edit and copy to publish the images.

You can then add the images to your site via image tag:

```html
<img id="image" class="img-fluid" src="//docs.neptunelabs.com/fsi/server?type=image&amp;source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&amp;width=940" width="940" alt="">
```
You can change the width and/or height directly in the image tag, the image will scale accordingly.
For example, the thumbnails on the left are much smaller:

```html
<img class="thumbnail img-fluid" onclick="changeImage('0')" src="//docs.neptunelabs.com/fsi/server?type=image&amp;source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&amp;width=150&amp;rect=0.15187,0,0.84813,1" width="150" alt="">
```
# Adding a crop effect

As you can see in the last image tag above, a crop effect was used.

You can do this easily in the *Publish To Web* tab. While having selected *Simple Image* as preset,
choose the crop icon in the Source Code toolbar.

![Config Image](readme-pdp-4.png)

In the modal, you can add the crop area to the image via drag & drop.
Select OK as soon as you are finished.

![Config Image](readme-pdp-5.png)

The URL created will look like this:


[https://docs.neptunelabs.com/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&width=480&rect=0.15187,0,0.84813,1](https://docs.neptunelabs.comp/fsi/server?type=image&source=images/samples/ssi/furniture/nathan-oakley-o4s4AfTgOvg-unsplash.jpg&width=480&rect=0.15187,0,0.84813,1)

The *&rect=* part defines the area of the cropping.

## Testing with examples from  your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
