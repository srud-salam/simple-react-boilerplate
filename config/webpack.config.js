const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}.config.js`);
    const config = merge(baseConfig, envConfig)
    return config;
}