import { Routes } from './type';

export const guideRoutes: Routes = [
  {
    label: 'YMM4情報サイトとは',
    path: '/guide/overview',
  },
  {
    label: 'YMM4とは',
    pages: [
      {
        label: '概要',
        path: '/guide/YMM4/overview',
      },
      {
        label: '導入方法',
        path: '/guide/YMM4/start-up',
      },
    ],
  },
  {
    label: '基本機能',
    pages: [
      {
        label: 'エフェクトアイテムの使い方',
        path: '/guide/tutorial/effect-item',
      },
      {
        label: '基本的な操作',
        path: '/guide/tutorial/operation',
      },
    ],
  },

  {
    label: 'エフェクト',
    pages: [
      { label: 'はじめに', path: '/guide/guides/overview' },
      {
        label: '各種設定',
        path: '/guide/guides/settings',
      },
      { label: 'デプロイ', path: '/guide/guides/deployment' },
    ],
  },
      {
    label: 'tips',
    path: '/tips/page/1/',
  },
];

export const allGuideRoutes: Routes = guideRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);
