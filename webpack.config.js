const path = require('path');

// Webpack config
// Input, do something, output
// entry (entry points) = input
// input = a singe jsx files. But entry pts work recursively
// left = output filename
// right = input filename
//
// output = name = variable maps to filenames in entry block above.
// Saying our output file should live at /public/javascripts/build.js
//
// resolve - tells what files to look for.
//
// module - tell webpack to tell babel which files to translates
// Look for jsx files
// Exclude some directories from search
// Run babel on those found
module.exports = {
  entry: {
    'javascripts/build.js': './src/index.jsx',
  },
  output: {
    filename: '[name]',
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
    ],
  },
};
