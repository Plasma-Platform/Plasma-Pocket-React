const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseDir = process.cwd();

module.exports = {
  devServer: {
    contentBase        : '../src/www',
    host               : '0.0.0.0',
    port               : 8001,
    historyApiFallback : true,
    inline             : true,
    hot                : false,
    https              : true
  },
  devtool : ['source-map', 'css-loader?sourceMap'],
  plugins : [
    new HtmlWebpackPlugin({
      template : baseDir + '/src/www/index.template.ejs',
      inject   : 'body',
      GTM      : 'GTM-N6WPMQ'
    })
  ]
};
