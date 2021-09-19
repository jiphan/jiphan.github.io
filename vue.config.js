// vue.config.js file to be place in the root of your repository

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http//localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    }
  }
}