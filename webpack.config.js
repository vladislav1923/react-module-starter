const { merge } = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common.config');
const buildConfig = require('./webpack/webpack.build.config');
const devConfig = require('./webpack/webpack.dev.config');

module.exports = (env, args) => {
  switch (args.mode) {
    case 'development':
      return merge(commonConfig, devConfig);
    case 'production':
      return merge(commonConfig, buildConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
