import { GetStaticProps } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export const getStaticProps: GetStaticProps = async () => {
  const xml = await generateSitemapXml(); // xmlコードを生成する処理

  return {
    props: {},
    revalidate: 86400, // 24時間のリバリデーション設定
  };
};

async function generateSitemapXml(): Promise<string> {
  // 関数の中身は変更なし
  const links = [{ url: '/', changefreq: 'daily', priority: 0.3 }];
  const stream = new SitemapStream({ hostname: 'https://ymm4-info.vercel.app' });

  return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );
}

const Page = () => null;
export default Page;