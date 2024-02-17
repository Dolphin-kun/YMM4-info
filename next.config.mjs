import mdx from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkBreaks from "remark-breaks";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'jsx','md', 'mdx'],
  compiler: {
    emotion: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm,remarkBreaks],
    rehypePlugins: [rehypeSlug],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX(nextConfig);
