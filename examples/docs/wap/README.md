# XDC UI 使用文档

---------


## 安装

```shell
npm install xdc-ui -save
```

## 快速开始

引入全部组件
```javascript
import Vue from 'vue';
import MintUI from 'xdc-ui';
import 'xdc-ui/lib/style.css';

Vue.use(MintUI);
```

只引入需要的组件
```javascript
import Cell from 'xdc-ui/lib/cell';
import 'xdc-ui/lib/cell/style.css';

import Button from 'xdc-ui/lib/button';
import 'xdc-ui/lib/button/style.css';

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```


### 使用 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component) 可以自动导入样式文件及按需加载

自动引入样式
```javascript
import Vue from 'vue';
import MintUI from 'xdc-ui';

Vue.use(MintUI);
```

按需加载
```javascript
import Vue from 'vue';
import { Cell, Button } from 'xdc-ui';

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

将会被翻译成
```javascript
var Vue = require('vue');
var Cell = require('xdc-ui/lib/cell');
require('xdc-ui/lib/cell/style.css');

var Button = require('xdc-ui/lib/button');
require('xdc-ui/lib/button/style.css');

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

### babel-plugin-component 配置
.babelrc
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "xdc-ui", "style": true }
  ]]]
}
```
