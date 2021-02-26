![Luxa CSS logo](readme/logo.svg)

# Luxa CSS

> A minimalist CSS framework.

See the documentation with examples [here](https://luxonauta.github.io/luxadocs/)!

You can also see the [collection on Codepen](https://codepen.io/collection/XEkzjB) :sparkling_heart:

Simple and focused, its goal is to provide a lightweight solution that can be easily implemented in any development context.

With simple class names like ``.lx-btn`` or ``.lx-row``, and a simple modifier system, like ``.is-left``.

## Table of contents

1. :rocket: [Quick Start](#quick-start)
2. :heavy_check_mark: [Browser Support](#browser-support)
3. :handshake: [How to contribute](#how-to-contribute)
4. :page_with_curl: [Copyright and License](#copyright-and-license)

## Quick Start

### by CDN

You can use **Luxa CSS** by CDN, provided by the :mechanical_arm: [jsDeliver](https://www.jsdelivr.com/) service, below:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luxonauta/luxa@1.1/dist/expanded/luxa.css">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luxonauta/luxa@1.1/dist/compressed/luxa.css">
```

### By Download

You can also download the files from the [dist/](https://github.com/luxonauta/luxa/tree/master/dist) folder and include them in your HTML with a `link`.

:warning: There are two folders inside the [dist/](https://github.com/luxonauta/luxa/tree/master/dist) folder:

 - [Expanded](https://github.com/luxonauta/luxa/tree/master/dist/expanded) - A standard CSS file.
 - [Compressed](https://github.com/luxonauta/luxa/tree/master/dist/compressed) - A minified version.

### Rewrite and Change

If you want to rewrite or change something, to better suit your needs.

You can start by cloning the repository:

```sh
git clone https://github.com/luxonauta/luxa.git
```

This project needs [Node](https://nodejs.org/en/), as we use [Gulp](https://gulpjs.com/).

Make sure you installed it with the following commands:

```sh
node --version
```

```sh
npm --version
```

```sh
npx --version
```

If they are not installed, follow the instructions [here](https://nodejs.org/en/).

### Install the Gulp command line utility

You can install it following the [Gulp installation tutorial](https://gulpjs.com/docs/en/getting-started/quick-start), or you can simply run the command on your terminal:

```sh
npm i
```

### Verify your Gulp versions

```sh
gulp --version
```
### Test it

Now all you have to do is initialize it:

```sh
npm run gulp
```

And you're ready! :ok_hand::grin:

## Browser Support

Luxa was developed with modern CSS, so it depends on the Gap property for Flexbox, which is not yet compatible with all browsers.

See the compatibility table below:

![Chrome logo](readme/chrome.svg) | ![Firefox logo](readme/firefox.svg) | ![Microsoft Edge logo](readme/microsoft-edge.svg) | ![Opera logo](readme/opera.svg) | ![Safari logo](readme/safari.svg)
--------------------------------- | ----------------------------------- | ------------------------------------------------- | ------------------------------- | ---------------------------------
84+ = ✔ Ok | 63+ = ✔ Ok | 84+ = ✔ Ok | ✗ Not supported | ✗ Not supported

See the [source here (CanIUse.com)](https://caniuse.com/flexbox-gap).

## How to contribute

If you want to help, there are many ways to do it! Start by reading the [contribution guide](https://github.com/luxonauta/luxa/blob/master/contributing.md).

## Copyright and License

Copyright (c) 2020 [Lucas de França](https://github.com/luxonauta). Code released under [the MIT license](https://github.com/luxonauta/luxa/blob/master/LICENSE).

English is not my native language, if there are any grammatical errors, please feel free to correct me, I will be very grateful!