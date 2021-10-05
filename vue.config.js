// vue.config.js file to be place in the root of your repository

module.exports = {
  devServer: {
    proxy: {
      '^/v1': {
        target: 'http://3.20.90.30:3000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/v1/': '/' },
      },
    }
  }
}