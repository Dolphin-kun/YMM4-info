/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_ROOT_URL,
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/sitemap.xml'],
    robotsTxtOptions: {
      additionalSitemaps: [
      'https://ymm4-info.vercel.app/sitemap.xml',
    ],
  }
  }