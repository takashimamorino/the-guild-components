// import type { StorybookConfig } from '@storybook/core-common';

module.exports = {
  stories: [
    '../packages/*/src/**/*.stories.mdx',
    '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  typescript: {
    reactDocgen: false,
  },
  babel(options) {
    const { plugins = [] } = options;
    return {
      ...options,
      plugins: [
        ...plugins,
        [
          require.resolve('@babel/plugin-proposal-private-property-in-object'),
          { loose: true },
        ],
      ],
    };
  },
};
