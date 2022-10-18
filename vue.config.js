const { defineConfig } = require('@vue/cli-service')
const themePath = '~@/assets/style/theme.less'
module.exports = defineConfig({
  transpileDependencies: true,
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
            hack: `true; @import "${themePath}";`
          }
        }
      }
    }
  }
})
