import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
   
  proxy: {
    '/api': {
      target: 'http://localhost:8084',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
   
  cssLoaderOptions:{
    localIdentName:'[local]'
  },
  lessLoaderOptions:{
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  strictMath: true,
                },
              },
            },
          ],
        },
      ],
    },
  },
  
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: '../pages/index',
          routes: [
            {
              path: '/list',
              component: '../pages/home/List/index'
            },
            {
              path: '/imageList',
              component: '../pages/home/ImageList/index'
            },
            {
              path: '/tagList',
              component: '../pages/home/TagList/index'
            },
            {
              path: '/ellipis',
              component: '../pages/home/Ellipis/index'
            },
            {
              path: '/study',
              component: '../pages/study/index'
            },
            {
              path:'/expandTable',
              component:'../pages/home/ExpandTable/index'
            }
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
    'umi-plugin-gh-pages',
  ],
 
   
   
  base: '/',
  publicPath:'/'
};
export default config;

