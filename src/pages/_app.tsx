import { DefaultLayout } from '@/components/default';
import { GuideLayout } from '@/components/guide';
import { EffectsLayout } from '@/components/effects';
import { NewsLayout } from '@/components/news';
import { HomeLayout } from '@/components/home';
import { AppProvider } from '@/providers/app';
import { EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 

NProgress.configure({ showSpinner: false }); // スピナーを隠す設定

type Props = AppProps & {
  emotionCache?: EmotionCache;
};

function MyApp({ Component, emotionCache, pageProps }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isHome = router.pathname === '/';
  const isGuide = router.pathname.includes('/guide');
  const isEffects = router.pathname.includes('/effects');
  const isNews = router.pathname.includes('/news');

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setLoading(true);
    };
    const handleComplete = () => {
      NProgress.done();
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    handleStart();
    handleComplete();

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && (
      <div style={styles.loading}>
        <div>
          <h1 className="next-loading-h1" style={styles.h1}>
            Loading...
          </h1>
        </div>
      </div>
      )}
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
        ) : isEffects ? (
          <EffectsLayout>
            <Component {...pageProps} />
          </EffectsLayout>
        ) : isNews ? (
          <NewsLayout>
            <Component {...pageProps} />
          </NewsLayout>
        ) : (
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        )}
      </AppProvider>
    </>
  );
}


const styles = {
  loading: {
    fontFamily:
      'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  h1: {
    fontSize: 24,
    fontWeight: 500,
    opacity: 0,
    animation: "fadeIn 0.5s forwards",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
} as const;


export default MyApp;