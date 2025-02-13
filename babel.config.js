module.exports = {
  presets: ['module:@react-native/babel-preset'],
    plugins: [
    [
      'module-resolver',
      { 
        alias: {
          '@src': './src',  
          "@components/common": "./src/components/common",
          '@components': './src/components/*',
          '@screens': './src/screens/*',
          '@utils': './utils/*',
          '@hooks': './hooks/*',
          '@constants': './src/constants/',
          '@services': './src/services/*',
          '@validations': './validations/index.ts',
          '@types': './types/index.ts',
          '@navigation': './src/navigation/*',
          '@styles': './src/styles/*',
          '@icons': './src/components/Icon',
        },
        extensions: ['.js', '.ts', '.tsx', '.json', ".android.js", ".ios.js"]
      },
    ], 
  ],
};
