# <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png" height="32px" width="auto" /> PostCSS Brazilian Portuguese Stylesheets
> [PostCSS](http://postcss.org/) plugin for writing CSS in Portuguese

Write your CSS in portuguese! 

## Installation
```bash
$ npm install postcss-brazilian-portuguese-stylesheet
```

## Usage

Add [PostCSS](https://github.com/postcss/postcss) in your project:

```js
$ npm install postcss --save-dev
``` 

In your script:

```js
const fs = require('fs');
const postcss = require('postcss');
const brazilianStyleSheets = require('postcss-brazilian-portuguese-stylesheet')

// css to be processed
var css = fs.readFileSync('./path/to/file.css', 'utf8');

postcss(brazilianStyleSheets)
.process(css)
.then(result =>{
  fs.writeFileSync('./path/to/output.css', result.css);
});
```
## Example

_**Brazilian Stylesheet**_:
```css
div {
  margem: 0 automatico;
  largura: 300px;
  altura: 300px;
  imagemFundo: url('path/to/image.jpg') naoRepetir;
}
```
_**CSS Output**_:
```css
div {
  margin: 0 auto;
  width:300px;
  height:300px;
  background-image: url('path/to/image.jpg') no-repeat;
}
```
## Changelog
See [CHANGELOG](CHANGELOG.md)

## License

&copy; MIT
