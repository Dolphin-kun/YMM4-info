import { GetServerSideProps } from 'next'
import { getServerSideSitemapLegacy, ISitemapField } from 'next-sitemap'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await fetch('https://ymm4-info.vercel.app/')
    const pageData = await res.json();
    console.log(res);
    const fields: ISitemapField[] = [];

    pageData.forEach((page) => {
        console.log(page)
        fields.push({
            loc: process.env.NEXT_PUBLIC_ROOT_URL,
        });
    });
    
    ctx.res.setHeader('Cache-Control', 'max-age=86400'); // 24時間キャッシュ
    return getServerSideSitemapLegacy(ctx, fields)
}


export default function Sitemap() {
    return null;
}