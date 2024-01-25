import { GetServerSidePropsContext } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml(); // xmlコードを生成する処理

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間のキャッシュ
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

async function generateSitemapXml():string {
  // An array with your links
  const links = [{ url: '/',  changefreq: 'daily', priority: 0.3  }]
  // Create a stream to write to
  const stream = new SitemapStream( { hostname: 'https://ymm4-info.vercel.app' } )
  
  // Return a promise that resolves with your XML string
  return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
    console.log(data)
  );
};

const Page = () => null;
export default Page;