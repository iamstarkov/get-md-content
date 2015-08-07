# get-md-content

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get content from markdown article

## Install

    npm install --save get-md-content

## Usage

```js
import getContent from 'get-md-content';

// small helper function
const isHeader = node => node.type === 'Header';

const simple = `
# header

content`

// simple get content without header
getContent(simple, ['header']).text); // content
getContent(simple, [/header/]).text); // content
getContent(simple, [isHeader]).text); // content

const basic = `
# header

20 December 2012

content

with two paragraphs`;

// basic get content without header and date
getContent(basic, [/header/, /december/gim]).text;
    // content\n\nwith two paragraphs
```

## API

### getContent(input, removeList)

#### input

*Required*  
Type: `String`

Markdown string.

#### removeList

Type: `Array` of `Function || RegExp || String`  
Default: `[]`

Lorem ipsum.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/get-md-content
[npm-image]: https://img.shields.io/npm/v/get-md-content.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/get-md-content
[travis-image]: https://img.shields.io/travis/iamstarkov/get-md-content.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/get-md-content
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/get-md-content.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/get-md-content
[depstat-image]: https://david-dm.org/iamstarkov/get-md-content.svg?style=flat-square
