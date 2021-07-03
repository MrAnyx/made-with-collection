# Made-With-Collection

Made-with-collection a badge provider based on [simple-icons](https://github.com/simple-icons/simple-icons) for websites.

## Installation

- You can install it using `npm`

```bash
npm i made-with-collection
```

- By downloading the latest release
- Or using a CDN

## Usage

### Using module import

```js
import MadeWith from "path/to/dist/made-with-module.js";

// Then you can conditionnaly enable it using the 'enable' function
MadeWith.enable();
```

> ⚠ This method only works using `npm` or the latest release. If your using an external js file to write the code above, you'll need to add the `type="module"` when importing the script.

### Using a CDN

Simply link the CDN to your html page like this

```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
<script src="https://unpkg.com/react@16.7.0/umd/react.production.min.js"></script>
```

Examples are provided onto the `/test` folder.

Hope you like it 👍