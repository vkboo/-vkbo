import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@vkbo/utils',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: process.env.NODE_ENV === 'production' ? '/-vkbo/utils/docs-dist/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/-vkbo/utils/docs-dist/' : '/',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  navs: [
    {
      title: 'Components',
      path: 'https://vkboo.github.io/-vkbo/components/docs-dist',
    },
    {
      title: 'Hooks',
      path: 'https://vkboo.github.io/-vkbo/hooks/docs-dist',
    },
    null, // null 值代表保留约定式生成的导航，只做增量配置
  ],
});
