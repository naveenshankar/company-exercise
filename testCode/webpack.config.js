var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var DEST_DIR = path.resolve(__dirname, "public");
var STATIC_DIR = path.resolve(__dirname, "static");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: SRC_DIR + "/routes.js",
    output: {
        path: DEST_DIR,
        filename: "bundle.js",
        resolve: {
        extensions: ['', '.js', '.jsx']
      }
    }, 
    module: {
        preLoaders: [  /* ESLINT LOADERS */
          {
              test: /\.js$/,
              enforce: 'pre',
              exclude: /node_modules/,
              loaders: ['eslint-loader']
          }
        ],
        loaders: [
            {
              test: /\.js?$/, 
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                  presets: ['react','es2015','stage-1','stage-2']
                }
            },
            { test: /\.png$/, loader: "file-loader" },
            { test: /\.gif$/, loader: "file-loader" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=100000000000" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000000000" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.json$/, loader: 'json-loader' },
        ]
    },
    plugins: [
            // set global consts
              new webpack.DefinePlugin({
                'process.env': {
                    SERVICE_URL: JSON.stringify("http://localhost:3001"),
                    //NODE_ENV: JSON.stringify('production')
                    NODE_ENV: JSON.stringify('development')
                }
              }),
              // optimizations
              // new webpack.optimize.DedupePlugin(),
              // new webpack.optimize.OccurenceOrderPlugin(),
              // new webpack.optimize.UglifyJsPlugin({
              //   //beautify: false,
              //   compress: {
              //     warnings: false
              //   }
              // }),

    ],
    node: {
    fs: "empty"
    }
};