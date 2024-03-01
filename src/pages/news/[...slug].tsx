import { GuidePage } from '@/components/guide';
import { components } from '@/components/mdx';
import { getAllPaths, getMdxBySlug } from '@/lib/mdx';
import { MdxSource } from '@/types/mdx';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';

type Props = {
  mdxSource: MdxSource;
};

export default function Page({ mdxSource }: Props) {
  return (
    <GuidePage>
      <MDXRemote {...mdxSource} components={components} />
    </GuidePage>
  );
}

const BASE_PATH = 'news';

type Params = NextParsedUrlQuery & {
  slug: string[];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: getAllPaths(BASE_PATH),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}: GetStaticPropsContext) => {
  const slug = params?.slug as string[];
  const mdxSource = await getMdxBySlug(BASE_PATH, slug);

  return {
    props: {
      mdxSource,
    },
  };
};
