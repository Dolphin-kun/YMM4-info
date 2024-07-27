import { Routes } from './type';

export const LiveRoutes: Routes = [
  {
    label: '概要',
    path: '/' + encodeURIComponent("Live講座") + '/overview',
  },
];


export const allLiveRoutes: Routes = LiveRoutes.flatMap((route) =>
  route.pages ? route.pages : [{ label: route.label, path: route.path }],
);