export default {
  target: 'browser',
  esm: 'babel',
  cjs: 'babel',
  include: 'node_modules/**',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
