const path = require('path');

module.exports = {
  reactStrictMode: true,
  env: {
    CUSTOM_ENV_VARIABLE: process.env.CUSTOM_ENV_VARIABLE,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Modify the `config` object as needed
    return config;
  },
};
