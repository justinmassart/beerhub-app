/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve(
      'metro-react-native-babel-transformer',
    ),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
      resolver: {
        sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Include any other file extensions you are using
        resolveRequest: (context, realModuleName, platform, moduleName) => {
          if (moduleName.startsWith('./') || moduleName.startsWith('../')) {
            const basePath = path.resolve(context, 'App');
            const resolvedPath = path.resolve(
              basePath,
              moduleName.replace(/^(?:\.\.\/)+/, ''),
            );
            return resolvedPath;
          }
          return null;
        },
      },
    }),
  },
};
