import { Routes } from './type';

export const globalRoutes: Routes = [
  {
    label:'YMM4講座 特設ページ'
    path: '/' + encodeURIComponent("Live講座") + '/overview',
  }
  {
    label: 'Tips',
    path: '/tips/page/1',
  },
  {
    label: 'Guide',
    path: '/guide/overview',
  },
  {
    label: 'Effects',
    path: '/effects/overview',
  },
  {
    label: 'FAQ',
    path: '/faq/overview',
  },
];
