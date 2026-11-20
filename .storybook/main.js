const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react',
    options: {
      strictMode: true,
    },
  },
  webpackFinal: async (config) => {
    const rootPath = path.resolve(__dirname, '../src');
    config.resolve.alias['@'] = rootPath;
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    });

    return config;
  },
};
