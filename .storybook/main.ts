import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../lib/components/**/stories/*.stories.@(js|ts|jsx|tsx|mdx)'],
  staticDirs: ['../dist'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  docs: {
    autodocs: 'tag'
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  viteFinal: async (config) => {
    // Set base path for GitHub Pages deployment
    if (process.env.NODE_ENV === 'production') {
      config.base = '/phantomartist/storybook/';
    }
    return config;
  }
};
export default config;
