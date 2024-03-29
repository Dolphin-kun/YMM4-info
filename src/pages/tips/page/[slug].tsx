import { DefaultPage } from '@/components/default';
import { PostCard } from '@/components/PostCard';
import { PostTag } from '@/components/PostTag';
import { getAllFrontmatters } from '@/lib/mdx';
import { FrontmatterWithPath } from '@/types/fromtmatter';
import { distinct } from '@/utils/distinct';
import { Pagination, Stack, Typography, Grid } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { ChangeEvent, useEffect } from 'react';
import { Seo } from '@/components/Seo';

type Props = {
  frontmatters: FrontmatterWithPath[];
  pagesCount: number;
  tags: string[];
};

export default function Page({ frontmatters, pagesCount, tags }: Props) {
  const router = useRouter();

  const slug = router.query.slug as string;

  const handleChange = (e: ChangeEvent<unknown>, page: number) => {
    router.push(`/tips/page/${page}`);
  };

  useEffect(() => {
    const currentPage = Number(slug);
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;

    if (previousPage >= 1) {
      router.prefetch(`/tips/page/${previousPage}`);
    }
    if (nextPage <= pagesCount) {
      router.prefetch(`/tips/page/${nextPage}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <DefaultPage>
      <Seo title={'Tips'} description={'Tipsの一覧ページです'} image={'サムネイル.png'} />
      <Stack spacing={6}>
        <Typography variant="h1">Tips</Typography>
        <Stack direction="row" flexWrap="wrap" spacing={2}>
          {tags.map((tag) => (
            <PostTag key={tag} href={`/tips/tags/${tag}`} label={tag} />
          ))}
          <PostTag
            key=""
            href="/tips/tags"
            label="See More Tags"
            css={{
              background: 'transparent',
              fontWeight: 700,
              border: '1px solid black',
              transitionDuration: '200ms',
              ':hover': {
                color: 'white',
                background: 'black',
              },
            }}
          />
        </Stack>
        <Stack spacing={4}>
        <Grid container spacing={2}>
          {frontmatters.map((frontmatter, index) => {
            const { title, description, author, image, date, path } =
              frontmatter;

            return (
              <Grid item xs={12} md={6} key={index}>
              <PostCard
                key={path}
                title={title}
                description={description}
                author={author}
                date={date}
                image={image}
                href={path}
              />
              </Grid>
            );
          })}
          </Grid>
          <Stack direction="row" justifyContent="center">
            <Pagination count={pagesCount} onChange={handleChange} />
          </Stack>
        </Stack>
      </Stack>
    </DefaultPage>
  );
}

const BASE_PATH = 'tips/posts';

const POSTS_PER_PAGE = 10;
const TAGS_COUNT = 2;

type Params = NextParsedUrlQuery & {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const postsCount = getAllFrontmatters(BASE_PATH).length;
  const pagesCount = Math.ceil(postsCount / POSTS_PER_PAGE);
  const pages = Array.from({
    length: pagesCount,
  }).map((_, idx) => idx + 1);

  return {
    paths: pages.map((page) => ({
      params: {
        slug: String(page),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const page = Number(params!.slug);
  const frontmatters = getAllFrontmatters(BASE_PATH);
  const postsCount = frontmatters.length;
  const pagesCount = Math.ceil(postsCount / POSTS_PER_PAGE);

  const tags = distinct(
    frontmatters.flatMap((frontmatter) => frontmatter.tags),
  );

  return {
    props: {
      frontmatters: frontmatters.slice(
        POSTS_PER_PAGE * (page - 1),
        POSTS_PER_PAGE * page,
      ),
      pagesCount,
      tags: tags.slice(0, TAGS_COUNT),
    },
  };
};
