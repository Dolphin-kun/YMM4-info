import { DefaultPage } from '@/components/default';
import { PostTag } from '@/components/PostTag';
import { getAllFrontmatters } from '@/lib/mdx';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { GetStaticProps } from 'next';

type Props = {
  titles: string[];
};

export default function Page({ titles }: Props) {
  return (
    <DefaultPage>
      <Stack spacing={6}>
        <Typography variant="h1">Snippets</Typography>
        <Stack direction="row" flexWrap="wrap" spacing={2}>
          {titles.map((title) => (
            <PostTag key={title} href={`/snippets/${title}`} label={title} />
          ))}
        </Stack>
      </Stack>
    </DefaultPage>
  );
}

const BASE_PATH = 'Effects';

export const getStaticProps: GetStaticProps<Props> = async () => {
  const frontmatters = getAllFrontmatters(BASE_PATH);
  const titles = frontmatters.map((frontmatter) => frontmatter.title);

  return {
    props: {
      titles,
    },
  };
};