# Element
[![Build Status](https://travis-ci.org/ElemeFE/element.svg?branch=master)](https://travis-ci.org/ElemeFE/element)
[![npm package](https://img.shields.io/npm/v/element-ui.svg)](https://www.npmjs.org/package/element-ui)
[![NPM downloads](http://img.shields.io/npm/dm/element-ui.svg)](https://npmjs.org/package/element-ui)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/element-ui@next/lib/index.js?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/element-ui@next/lib/theme-default/index.css?compression=gzip&label=gzip%20size:%20CSS)
[![Join the chat at https://gitter.im/ElemeFE/element](https://badges.gitter.im/ElemeFE/element.svg)](https://gitter.im/ElemeFE/element?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Desktop UI elements for Vue.js 2.0.

## Links
- [Home Page](http://xdc.party/)
- [Docs](http://xdc.party/#/component)

## Install
```shell
npm install Xdc-ui@next -S
```

## Quick Start
use [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)

``` javascript
import Vue from 'vue'
import Element from 'xdc-ui'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

(roughly) to

``` javascript
import Vue from 'vue'
import Element from 'xdc-ui'
import 'xdc-ui/lib/theme-default/index.css'

Vue.use(Element)

// or
import Select from 'xdc-ui/lib/select'
import 'xdc-ui/lib/theme-default/select.css'
import Button from 'xdc-ui/lib/button'
import 'xdc-ui/lib/theme-default/button.css'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

## babel-plugin-component
.babelrc
```json
{
  "plugins": ["xxx", ["component", [
    {
      "libraryName": "xdc-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
}
```

## Browser Support
Modern browsers and Internet Explorer 9+.

## Development
Recommend: node >= 4 npm >= 3

```shell
# development => install packages -> build icon etc. -> run webpack
$ npm run dev

# build => build all component
$ npm run dist
```

## LICENSE
MIT
