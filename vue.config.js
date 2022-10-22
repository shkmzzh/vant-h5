const { defineConfig } = require('@vue/cli-service')
const themePath = '~@/assets/style/theme.less'
module.exports = defineConfig({
  transpileDependencies: true,
  // 设置获取.js,.css文件时，是以相对地址为基准的。
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: './',
  // 打包不要生成map 文件
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // blue: '#FA6D1D',
            // 'text-color': '#FA6D1D'
            // 'border-color': '#eee'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            //  在这里的直接写绝对路径中会报错，应该是因为用了 eslint这个插件导致的,但是把路径用变量来接收就不会有问题了
            hack: `true; @import "${themePath}";`
          }
        }
      }
    }
  }
})
