import { DefaultPage } from '@/components/default';
import { PostCard } from '@/components/PostCard';
import { getAllFrontmatters } from '@/lib/mdx';
import { FrontmatterWithPath } from '@/types/fromtmatter';
import { distinct } from '@/utils/distinct';
import { Stack, Typography, Grid } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { Seo } from '@/components/Seo';

type Props = {
  frontmatters: FrontmatterWithPath[];
  tag: string;
};

export default function Page({ frontmatters, tag }: Props) {
  return (
    <DefaultPage>
      <Seo title={`Tag : ${tag}`} description={`Tag : ${tag} の一覧ページです`} image={'サムネイル.png'} />
      <Stack spacing={6}>
        <Typography variant="h1">Tag : {tag}</Typography>
        <Stack spacing={4}>
        <Grid container spacing={2}>
          {frontmatters.map((frontmatter,index) => {
            const { title, description, author, image, date, path } =
              frontmatter;

            return (
              <Grid item xs={12} md={6} key={index}>
              <PostCard
                key={description}
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
        </Stack>
      </Stack>
    </DefaultPage>
  );
}

const BASE_PATH = 'tips/posts';

type Params = NextParsedUrlQuery & {
  slug: string;
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
  const frontmatters = getAllFrontmatters(BASE_PATH).filter((frontmatter) =>
    frontmatter.tags.includes(slug),
  );

  return {
    props: {
      frontmatters,
      tag: slug,
    },
  };
};
