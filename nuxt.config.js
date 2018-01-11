const http = require('./plugins/http')
const requestInterceptor = http.requestInterceptor
module.exports = {
  css: [
    {src: './assets/less/reset.less', lang: 'less'},
    'element-ui/lib/theme-chalk/index.css'
  ],
  build: {
    babel: {
      presets: ['env', 'stage-0'],
      plugins: [
        'transform-runtime'
      ]
    },
    vendor: ['axios', 'element-ui']
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  // proxy: [
  //   [
  //     '/',
  //     {
  //       target: 'http://www.wsxqt.com', // api主机
  //       // pathRewrite: {'^/api': '/'}
  //     }
  //   ]
  // ],
  plugins: [
    '~plugins/utils',
    '~plugins/element-ui',
    // '~plugins/http'
  ],
  axios: {
    requestInterceptor
  }
}
