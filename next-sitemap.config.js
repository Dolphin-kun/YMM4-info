/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_ROOT_URL,
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: './out',
  }