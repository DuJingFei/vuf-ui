const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'lyui': './src/components/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../package'),
    publicPath: '/package/',
    library: 'lyui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: 'vue-style-loader!css-loader',
          sass: 'vue-style-loader!css-loader!sass-loader'
        },
        postLoaders: {
          html: 'babel-loader'
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, 
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'autoprefixer-loader'
      ]
    }, 
    /*
    {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
    }, */
    {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}

