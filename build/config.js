var Components = require('../components.json');
var path = require('path');
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`packages/${key}/index.js`] = `xdc-ui/lib/${key}`;
  externals[`packages/${key}/style.css`] = `xdc-ui/lib/${key}/style.css`;
  externals['main/utils/clickoutside'] = 'xdc-ui/lib/utils/clickoutside';
  externals['main/utils/popper'] = 'xdc-ui/lib/utils/popper';
  externals['main/utils/vue-popper'] = 'xdc-ui/lib/utils/vue-popper';
});

exports.externals = Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals);

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples')
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;
