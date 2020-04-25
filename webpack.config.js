// Cargamos un módulo nativo de node que nos gestiona rutas
const path = require('path');

// Este módulo minifica el bundle (el archivo compilado)
const TerserPlugin = require('terser-webpack-plugin');

// Este módulo inyecta el bundle en el HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constantes con los paths de la aplicación
const paths = {
  ROOT: path.resolve(__dirname),
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

//process.env nos permite acceder a las variables de entorno del sistema operativo
//Accedemos a las variables definidas de entorno que hemos definido en el package.json
const development = process.env.NODE_ENV === 'development';
const publicPath = process.env.PUBLIC_PATH || '/';

// Set plugins
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  hash: !development,
});

module.exports = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js',
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|jpeg|gif|png|wav)$/,
        loader: 'file-loader',
        options: {
          publicPath: `${publicPath}/statics/images/`,
          outputPath: './statics/images/',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
        options: {
          publicPath: `${publicPath}/statics/vectors/`,
          outputPath: './statics/vectors/',
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    hot: false,
    port: 8080,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: development,
        cache: true,
        parallel: true,
        terserOptions: {
          compress: true,
          ecma: 6,
          ie8: false,
          mangle: true,
        },
      }),
    ],
  },
  mode: process.env.NODE_ENV,
  devtool: development && 'source-map',
  plugins: [
    HtmlWebpackPluginConfig
  ],
};