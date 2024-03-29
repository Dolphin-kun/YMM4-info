import { DefaultPage } from '@/components/default';
import { Image } from '@/components/Image';
import { components } from '@/components/mdx';
import { PostTag } from '@/components/PostTag';
import { Share } from '@/components/Share';
import { getAllPaths, getMdxBySlug } from '@/lib/mdx';
import { theme } from '@/styles/theme';
import { MdxSource } from '@/types/mdx';
import { formatDate } from '@/utils/date';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { Seo } from '@/components/Seo';

type Props = {
  mdxSource: MdxSource;
};

export default function Page({ mdxSource }: Props) {
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const { scope } = mdxSource;
  const { title, description, image, author, version, date, tags } = scope;

  return (
    <DefaultPage withToc>
    <Seo title={title} description={description} image={image} />
      <Stack spacing={4}>
        <Typography component="time">{formatDate(date)}</Typography>
        <Typography variant="h1">{title}</Typography>
        <Stack direction="row" flexWrap="wrap" spacing={2}>
          {tags.map((tag) => (
            <PostTag key={tag} href={`/tips/tags/${tag}`} label={tag} />
          ))}
        </Stack>
        <Typography component="span">Author: {author}  Version: {version}</Typography>
        <Box sx={{ width: '100%', height: matches ? 320 : 256 }}>
          <Image src={image} alt={`cover image - ${title}`} />
        </Box>
        <Share title={title} />
      </Stack>
      <Box sx={{ pt: 6 }}>
        <MDXRemote {...mdxSource} components={components} />
      </Box>
    </DefaultPage>
  );
}

const BASE_PATH = 'tips/posts';

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
}) => {
  const slug = params!.slug;
  const mdxSource = await getMdxBySlug(BASE_PATH, slug);

  return {
    props: {
      mdxSource,
    },
  };
};
