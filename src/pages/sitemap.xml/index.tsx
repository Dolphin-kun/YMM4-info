import { GetServerSideProps } from 'next'
import { getServerSideSitemapLegacy } from 'next-sitemap'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const response = await fetcher('https://ymm4-info.vercel.app/')
    console.log(response);
    const fields = response.contents.map((content) => {
        return {
            loc: `https://ymm4-info.vercel.app/${content.category.name}/${content.id}`,
            lastmod: content.updatedAt
        }
    })

  return getServerSideSitemapLegacy(ctx, fields)
}


export default function Sitemap() {}