import { Routes } from './type';

export const faqRoutes: Routes = [
  {
    label: '概要',
    path: '/faq/overview',
  },
];


export const allFaqRoutes: Routes = faqRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);