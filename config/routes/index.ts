const BASE_NAME = 'xx系统';

export default [
  {
    path: '/',
    title: `${BASE_NAME}`,
    component: '@/layouts/pcLayout',
    routes: [
      { path: '/', exact: true, title: `首页 · ${BASE_NAME}`, component: '@/pages/pc/index' },
    ],
  },
];
