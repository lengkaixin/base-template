import { defineConfig } from 'umi';
// import routes from './routes';

// const { TYPE } = process.env;

const LOCAL_PROXY = 'http://175.178.196.9:8080'; // DEV 地址
// const LOCAL_PROXY_UC = 'http://lxa-aiot.psc.sw'; // DEV-UC 地址

export default defineConfig({
  define: {},
  npmClient: 'pnpm',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss', '@umijs/plugins/dist/dva'],
  dva: {},
  // favicon: `favicon.png`,
  // base: TYPE === 'h5' ? '/epcsh5/' : '/epcsweb/',
  // publicPath: TYPE === 'h5' ? '/epcsh5/' : '/epcsweb/',
  // routes: routes,
  hash: true,
  proxy: {
    '/bf': {
      target: LOCAL_PROXY,
      // target: LOCAL_PROXY + '/bf/',
      changeOrigin: true,
      // pathRewrite: { '^/bf': '' },
    },
  },
});
