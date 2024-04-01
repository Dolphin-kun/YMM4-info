import { Routes } from './type';

export const newsRoutes: Routes = [
  {
    label: '概要',
    path: '/news/overview',
  },
  {
    label: 'アップデート情報',
    pages: [
      {
        label:'v4.26.x',
        path:'/news/update/4.26.x',
      },
      {
        label:'v4.27.x',
        path:'/news/update/4.27.x',
      },
    ],
  },
];

export const allNewsRoutes: Routes = newsRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);