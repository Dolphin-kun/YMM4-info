import { DefaultLayout } from '@/components/default';
import { GuideLayout } from '@/components/guide';
import { HomeLayout } from '@/components/home';
import { AppProvider } from '@/providers/app';
import { EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = AppProps & {
  emotionCache?: EmotionCache;
};

function MyApp({ Component, emotionCache, pageProps }: Props) {
  const router = useRouter();

  const isHome = router.pathname === '/';
  const isGuide = router.pathname.includes('/guide');

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="google-site-verification" content="dGAOo4Shts_OYHNeo1GldFi0Qa4TlrdqD5XcGIbB03Q" />
      </Head>
      <AppProvider emotionCache={emotionCache}>
        {isHome ? (
          <HomeLayout>
            <Component {...pageProps} />
          </HomeLayout>
        ) : isGuide ? (
          <GuideLayout>
            <Component {...pageProps} />
          </GuideLayout>
        ) : (
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        )}
      </AppProvider>
    </>
  );
}

export default MyApp;
