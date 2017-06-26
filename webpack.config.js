module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    },
	{
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader'
            },
	{
        test: /.*\.(gif|png|jpg)$/,
      loaders: ['file?hash=sha512&digest=hex&size=16&name=[hash].[ext]',
      'image-webpack-loader?optimizationLevel=7&interlaced=false']
    }		
	]
  },
  output: {
    path: './../rest/',
    publicPath: '/',
    filename: 'bundle.js'
  },

  watch: true,
  
  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: "source-map",

  devServer: {
    host: '0.0.0.0',
    contentBase: '../dist/',
	inline: true,
	port: 3000
  }



};
