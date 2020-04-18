const path = require('path');

module.exports = {
  entry: {
    main: "./dist/src/main.js",
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]-bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './html',
      }
    ]),
  ],
};
