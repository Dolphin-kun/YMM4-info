import { ROOT_URL } from '@/config/app';

export const resolveUrl = (...paths: string[]) => {
  const rootUrl = ROOT_URL.endsWith('/') ? ROOT_URL : ROOT_URL + '/';
  return (
    rootUrl +
    paths
      .flatMap((path) => path.split('/'))
      .filter(Boolean)
      .join('/')
  );
};

export const getImageUrl = (image: string | undefined) =>
  resolveUrl('assets', image ?? 'https://raw.githubusercontent.com/Dolphin-kun/YMM4-info/main/public/assets/image.png');
