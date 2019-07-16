module.exports = {
  lintOnSave: true,
  runtimeCompiler: true,
  publicPath: '/',
  devServer: {
    // host: 'localhost',
    port: 8089,
    // open: true,
    proxy: {
      '/api': {
        target: 'http://39.108.168.169:8003',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
