module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@components': './components/common/index.ts',
          '@components/*': './src/components/*',
          '@screens/*': './src/screens/*',
          '@utils/*': './src/utils/*',
          '@hooks/*': './src/hooks/*',
          '@constants/*': './src/constants/*',
          '@services/*': './src/services/*',
          '@validations': './validations/index.ts',
          '@types': './types/index.ts',
          '@navigation/*': './src/navigation/*',
          '@styles/*': './src/styles/*',
          '@icons': './components/Icon/index.ts',
        },
      },
    ],
    /**
     * Your other plugins
     */
  ],
};
