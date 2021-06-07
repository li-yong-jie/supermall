const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    hot: true,
    open: true
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      // 需要重启 IDE
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
  }
  // module.exports ={
  //   configureWebpack :{
  //     resolve:{
  //       alias:{
  //         'assets':'@/assets',
  //         'common':'@/common',
  //         'components':'@/components',
  //         'network':'@/network',
  //         'views':'@/views'
  //       }
  //     }
  //   }
};
