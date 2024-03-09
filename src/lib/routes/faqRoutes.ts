import { Routes } from './type';

export const faqRoutes: Routes = [
  {
    label: 'YMM4情報サイトとは',
    path: '/faq/overview',
  },
  {
    label: 'YMM4とは',
    pages: [
      {
        label: '概要',
        path: '/faq/YMM4/overview',
      },
      {
        label: '導入方法',
        path: '/faq/YMM4/start-up',
      },
    ],
  },
  {
    label: '基本機能',
    pages: [
      {
        label: '基本的な操作',
        path: '/faq/' + encodeURIComponent("基本機能") + '/operation',
      },
      {
        label: 'エフェクトアイテムの使い方',
        path: '/faq/' + encodeURIComponent("基本機能") + '/effect-item',
      },
    ],
  },
];


export const allFaqRoutes: Routes = faqRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);