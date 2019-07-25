module.exports = {
  lintOnSave: true,
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 32, // 换算的基数
            selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },


  configureWebpack: config => {
    // 用cdn方式引入
    config.externals = {
      'wx': 'wx',

    }
  },


  publicPath: './',
  devServer: {
    disableHostCheck: true,
    port:3000,
    proxy: {
      '/api': {
        target: 'http://10.0.0.58:8010',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/wx': {
        target: 'https://api.weixin.qq.com/cgi-bin/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/wx': ''
        }
      }
    },
  },
}
