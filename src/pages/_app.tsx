import { DefaultLayout } from '@/components/default';
import { GuideLayout } from '@/components/guide';
import { EffectsLayout } from '@/components/Effects';
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
  const isEffects = router.pathname.includes('/Effects');
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
    

    const handleRouteChange = (url) => {
      handleStart();
      handleComplete();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    handleRouteChange(router.pathname);

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
          <style
            dangerouslySetInnerHTML={{
              __html: `body{color:#000;background:#fff;margin:0}.next-loading-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-loading-h1{border-right:1px solid rgba(255,255,255,.3)}}`,
            }}
          />
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
    justifyContent: "center",
  },

  h1: {
    display: "inline-block",
    margin: "0 20px 0 0",
    padding: "0 23px 0 0",
    fontSize: 24,
    fontWeight: 500,
  },
} as const;


export default MyApp;