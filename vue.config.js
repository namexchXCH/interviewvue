const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({

  transpileDependencies: true,
  lintOnSave:false,
  chainWebpack: (config) => {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, './src/Icons/svg')) // 存放svg文件的目录
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, './src/Icons/svg')) // 存放svg文件的目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
  },


})
// module.exports = {
	
// }
