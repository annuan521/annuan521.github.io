import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
  proxy: {
    '/api': {
      target: 'http://localhost:9093',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/home',
          component: '../pages/index',
          routes: [
            {
              path: '/home/list',
              component: '../pages/home/List/index'
            },
            {
              path: '/home/imageList',
              component: '../pages/home/ImageList/index'
            },
            {
              path: '/home/tagList',
              component: '../pages/home/TagList/index'
            },
            {
              path: '/home/ellipis',
              component: '../pages/home/Ellipis/index'
            },
            {
              path: '/home/study',
              component: '../pages/study/index'
            },
          ],
        },

      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
        },
        dynamicImport: false,
        title: 'jkl',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
export default config;

