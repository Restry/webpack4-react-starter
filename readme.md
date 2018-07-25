# webpack4 无配置实现

不需要webpack.config.js文件, 实现基础React工程. 但是要实现复杂的工程还是要config定义比较好

package.json -> scripts ->

`webpack --mode development ./src/index.js --output ./dist/main.js --module-bind js=babel-loader
`

参数描述

- mode  编译模式  development production
- output 输出
- module-bind  加载器


## webpack 4：将 CSS 提取到一个文件中

webpack 不知道如何将 CSS 提取到一个文件中。在过去，这是 extract-text-webpack-plugin 的工作。不幸的是，这个插件与 webpack 4 不太兼容。

mini-css-extract-plugin 可以解决这些问题。

> 注意：确保将 webpack 更新到 4.2.0 版。 否则 mini-css-extract-plugin 将无效！

## webpack dev server

`
yarn add webpack-dev-server --dev
`

`
"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
}
`