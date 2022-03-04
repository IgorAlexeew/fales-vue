const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    'index': {
      entry: './src/pages/home/main.js',
      template: './public/index.html',
      title: 'Главная страница',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    }
  }
})
