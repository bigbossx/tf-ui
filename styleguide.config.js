const path = require('path');
module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  title: 'tf-ui',
  styleguideDir: 'dist-docs',
  ribbon: {
    url: 'https://gitlab.com/TF_lV/tf-ui',
    text: 'Folk me on Github',
  },
  moduleAliases: {
    'tf-ui': path.resolve(__dirname, 'src'),
  },
};
