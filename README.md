# Image Lightbox Gallery

Adds a lightbox option to the WordPress core Image block using [Fancybox 4](https://fancyapps.com/fancybox/). This plugin lets you enable a lightbox view for individual images or group them into galleries by specifying a gallery slug.

## Features

- Adds an "Open in Lightbox" toggle to the core Image block.
- Allows specifying a gallery slug to group images.
- Supports captions.
- Uses Fancybox 4 for a lightweight, modern lightbox experience.
- Loads assets locally (no CDN dependency).
- Fully integrated with the block editor.

## Requirements

- WordPress 6.0+
- Node.js and npm (for development builds)
- Gutenberg block editor enabled

## Installation

1. Download or clone this repository into your `wp-content/plugins/` directory.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to compile assets and copy vendor libraries.
4. Activate the **Image Lightbox Gallery** plugin from your WordPress admin.

## Usage

1. Edit or create a post in the WordPress block editor.
2. Insert or select an Image block.
3. In the block settings sidebar, toggle **"Open in Lightbox"** to enable the feature.
4. Optionally, enter a **Gallery Slug** to group multiple images into a gallery.

Images with the same gallery slug will be grouped together in a Fancybox lightbox gallery.
