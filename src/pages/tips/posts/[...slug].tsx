import { DefaultPage } from '@/components/default';
import { Image } from '@/components/Image';
import { components } from '@/components/mdx';
import { PostCard } from '@/components/PostCard';
import { PostTag } from '@/components/PostTag';
import { Share } from '@/components/Share';
import { getAllPaths, getMdxBySlug } from '@/lib/mdx';
import { FrontmatterWithPath } from '@/types/fromtmatter';
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
  frontmatters: FrontmatterWithPath[];
  tag: string;
};

export default function Page({ mdxSource,frontmatters,tag }: Props) {
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
      <Stack spacing={4}>
          {frontmatters.map((frontmatter) => {
            const { title, description, author, image, date, path } =
              frontmatter;

            return (
              <PostCard
                key={description}
                title={title}
                description={description}
                author={author}
                date={date}
                image={image}
                href={path}
              />
            );
          })}
        </Stack>
    </DefaultPage>
  );
}

const BASE_PATH = 'tips/posts';

type Params = NextParsedUrlQuery & {
  slug: string[];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const frontmatters = getAllFrontmatters(BASE_PATH);
  const tags = distinct(
    frontmatters.flatMap((frontmatter) => frontmatter.tags),
  );
  return {
    paths: tags.map((tag) => ({
      params: { slug: tag },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const slug = params!.slug;
  const mdxSource = await getMdxBySlug(BASE_PATH, slug);
  const frontmatters = getAllFrontmatters(BASE_PATH).filter((frontmatter) =>
  frontmatter.tags.includes(slug),
);

  return {
    props: {
      mdxSource,
      frontmatters,
      tag: slug,
    },
  };
};
