import { Routes } from './type';

export const docsRoutes: Routes = [
  {
    label: 'YMM4情報サイトとは',
    path: '/docs/overview',
  },
  {
    label: 'YMM4 導入方法',
    path: '/docs/start-up',
  },
  {
    label: '基本機能',
    pages: [
      { label: 'はじめに', path: '/docs/tutorial/getting-started' },
      {
        label: 'スニペットを登録する',
        path: '/docs/tutorial/create-snippet-data',
      },
      {
        label: 'サイトのページに反映させる',
        path: '/docs/tutorial/display-snippet-data',
      },
      {
        label: '一覧ページを設ける',
        path: '/docs/tutorial/create-snippets-list',
      },
    ],
  },

  {
    label: 'エフェクト',
    pages: [
      { label: 'はじめに', path: '/docs/guides/overview' },
      {
        label: '各種設定',
        path: '/docs/guides/settings',
      },
      { label: 'デプロイ', path: '/docs/guides/deployment' },
    ],
  },
];

export const allDocsRoutes: Routes = docsRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);
