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

const isHeader = node => node.type === 'Header'; // small helper function

const simple = `
# header

content`;

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
getContent(basic, [/header/, /december/gim]).text; // content\n\nwith two paragraphs
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

Matched nodes will be removed.  
`String` or `RegExp` will be matched against plaintext markdown nodes.  
`Function` takes commonmark `node` as a first param, and ast iteration `event` as a second param. Check out [commonmark-helpers shortcuts](https://www.npmjs.com/package/commonmark-helpers#bunch-of-shortcut-helpers) and [commonmark api](https://github.com/jgm/commonmark.js#usage)

## Related

* [get-md-date][get-md-date] - get date from markdown article
* [get-md-desc][get-md-desc] - get description from markdown article
* [get-md-image][get-md-image] - get image from markdown article
* [get-md-title][get-md-title] - get title from markdown article

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

[get-md-date]: https://github.com/iamstarkov/get-md-date
[get-md-desc]: https://github.com/iamstarkov/get-md-desc
[get-md-image]: https://github.com/iamstarkov/get-md-image
[get-md-title]: https://github.com/iamstarkov/get-md-title
