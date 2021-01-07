const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v3',
    createProxyMiddleware({
      target: 'https://cors-anywhere.herokuapp.com/https://api.smarkets.com',
      changeOrigin: true,
    })
  );
}
