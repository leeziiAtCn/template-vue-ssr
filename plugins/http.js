function requestInterceptor (config, ctx) {
  config.headers['token'] = ctx.store.state.counter
  ctx.store.commit('increment')
  return config
}

module.exports = {
  requestInterceptor
}
