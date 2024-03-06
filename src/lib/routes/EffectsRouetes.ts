import { Routes } from './type';

export const effectsRoutes: Routes = [
  {
    label: '概要',
    path: '/Effects/overview',
  },
  {
    label: 'アニメーション',
    pages: [
      {
        label:'v4.26.0.0',
        path:'/news/update/4.26.0.0',
      }
    ]
  }
];

export const allEffectsRoutes: Routes = effectsRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);