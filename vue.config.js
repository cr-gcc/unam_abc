module.exports = {
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'ABC UNAM'
      return args
    })
  },
  //
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'/*'/unam_abc'*/
    : '/',
}
