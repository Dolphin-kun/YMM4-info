import { GetServerSideProps } from 'next'
import { getServerSideSitemapLegacy, ISitemapField } from 'next-sitemap'
import { DefaultPage } from '@/components/default';
import { Typography } from '@mui/material';


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await fetch('https://ymm4-info.vercel.app/')
    const pageData = await res.json();
    console.log(pageData);
    const fields: ISitemapField[] = [];

    fields.push({
        loc: "https://ymm4-info.vercel.app"
    })

   // pageData.forEach((page: any) => {
       // console.log(page)
       // fields.push({
       //     loc: 'https://ymm4-info.vercel.app/',
       // });
  //  });
    
    ctx.res.setHeader('Cache-Control', 'max-age=86400'); // 24時間キャッシュ
    return getServerSideSitemapLegacy(ctx, fields)
}

export default function Page() {
    return (
      <DefaultPage>
        <Typography variant="h1">xml</Typography>
      </DefaultPage>
    );
  }