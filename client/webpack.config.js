const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html', // Specify your HTML template file
        chunks: ['main','install'], // Include only 'main' chunk in this HTML file
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'text-editor',
        short_name: 'App',
        description: 'Your app description',
        background_color: '#ffffff',
        theme_color: '#000000',
        crossorigin:null,
        start_url: '/',
        publicPath: '/',
        
        icons: [
          {
            src: path.resolve('src/images/logo.png'), // Replace with your app icon path
            sizes: [96, 128, 192, 256, 384, 512], // Specify icon sizes
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
       new InjectManifest({
        swSrc: './src-sw.js', // Specify your service worker source file
        swDest: 'src-sw.js', // Output file name for the service worker
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
