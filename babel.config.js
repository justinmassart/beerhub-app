module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          app: './App',
          atoms: './App/Components/Atoms',
          molecules: './App/Components/Molecules',
          layouts: './App/Components/Layouts',
          pages: './App/Pages',
          containers: './App/Containers',
          images: './App/Images',
          themes: './App/Themes',
          navigation: './App/Navigation',
          config: './App/Config',
          types: './App/Types',
        },
      },
    ],
  ],
};
