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
        label: '基本的な操作',
        path: '/guide/' + encodeURIComponent("基本機能") + '/operation',
      },
      {
        label: 'エフェクトアイテムの使い方',
        path: '/guide/' + encodeURIComponent("基本機能") + '/effect-item',
      },
    ],
  },
  {
    label: '映像エフェクト',
    path: '/guide/Effects/overview',
  },
  
];


export const allGuideRoutes: Routes = guideRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);