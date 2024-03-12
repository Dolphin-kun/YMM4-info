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
        path: '/guide/YMM4/' + encodeURIComponent("YMM4とは"),
      },
      {
        label: '導入方法',
        path: '/guide/YMM4/' + encodeURIComponent("導入方法"),
      },
    ],
  },
  {
    label: '基本機能',
    pages: [
      {
        label: 'メイン画面',
        path: '/guide/' + encodeURIComponent("基本機能") +'/'+ encodeURIComponent("メイン画面"),
      },
      {
        label: 'エフェクトアイテムの使い方',
        path: '/guide/' + encodeURIComponent("基本機能") + '/effect-item',
      },
    ],
  },
];


export const allGuideRoutes: Routes = guideRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);