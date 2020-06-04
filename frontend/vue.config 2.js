module.exports = {
  devServer: {
    proxy: {
      '/api': {
        pathRewrite: { '^/api': '' },
        target: 'http://localhost:3000'
      }
    }
  }
}

// http://localhost:8080/api/login
// hamnar på
// http://localhost:3000/login
// och vi slipper CORS-problem
// och vi slipper cookies-problem
