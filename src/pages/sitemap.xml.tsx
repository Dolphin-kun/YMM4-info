import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml();

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間のキャッシュ
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

async function generateSitemapXml():string {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    
    // ここでurlを足していく
    const { posts } = await getAllPosts();
    posts.forEach((post) =>{
      xml += `
        <url>
          <loc>${process.env.NEXT_PUBLIC_ROOT_URL}/${post.path}</loc>
        </url>
      `
    })
    
    xml += `</urlset>`;
    return xml;
  }

const Page = () => null;
export default Page;

