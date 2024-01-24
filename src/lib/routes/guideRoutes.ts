import { Routes } from './type';

export const guideRoutes: Routes = [
  {
    label: 'YMM4情報サイトとは',
    path: '/guide/overview',
  },
  {
    label: 'YMM4 導入方法',
    path: '/guide/start-up',
  },
  {
    label: '基本機能',
    pages: [
      { label: 'はじめに', path: '/guide/tutorial/getting-started' },
      {
        label: 'スニペットを登録する',
        path: '/guide/tutorial/create-snippet-data',
      },
      {
        label: 'サイトのページに反映させる',
        path: '/guide/tutorial/display-snippet-data',
      },
      {
        label: '一覧ページを設ける',
        path: '/guide/tutorial/create-snippets-list',
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
];

export const allGuideRoutes: Routes = guideRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);
