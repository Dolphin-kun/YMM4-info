import { SITE_NAME } from '@/config/app';
import { theme } from '@/styles/theme';
import { FrontmatterWithPath } from '@/types/fromtmatter';
import { css } from '@emotion/react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import { PostCard } from '../PostCard';
import { Seo } from '../Seo';
import { LinkButton } from './LinkButton';

type Props = React.ComponentPropsWithoutRef<typeof Seo> & {
  frontmatters: FrontmatterWithPath[];
};

export const HomePage = ({
  frontmatters,
  title,
  description,
}: Props) => {
  return (
    <>
      <Seo title={title} description={description} image={'サムネイル.png'} />
      <Box sx={{ userSelect: 'none', py: 24 }}>
        <Stack alignItems="flex-start" spacing={8}>
          <Stack>
            <Typography
              component="span"
              fontSize="3.5rem"
              fontWeight={900}
              lineHeight={1}
            >
              {SITE_NAME}
            </Typography>
          </Stack>
          <Typography component="span" css={paragraphStyles}>
            YMM4に関する情報をまとめています。
            <br />
            非公式です。
          </Typography>
          <LinkButton href="/guide/overview">YMM4情報サイトとは</LinkButton>
        </Stack>
        {spacer}
        <Stack alignItems="flex-start" spacing={8}>
          <Typography variant="h2">Tips</Typography>
          <Typography css={paragraphStyles}>
          YMM4に関係する機能や編集のコツなど
          <br />
          </Typography>
          <Stack spacing={4}>
            <Grid container spacing={{ xs: 2, md: 2 }}>
            {frontmatters.map((frontmatter) => { 
              const { title, description, author, image, date, path } =
                frontmatter;
              <Grid item xs={2} sm={4} md={4}>
              return (
                <PostCard
                  key={path}
                  title={title}
                  description={description}
                  author={author}
                  date={date}
                  image={image}
                  href={path}
                />
              );
              </Grid>
            })}
            </Grid>
          </Stack>
          <LinkButton href="/tips/page/1">See More Tips</LinkButton>
        </Stack>
        {spacer}
        <Stack alignItems="flex-start" spacing={8}>
          <Typography variant="h2">YMM4 導入方法</Typography>
          <Typography css={paragraphStyles}>
            YMM4の導入方法はこちらからご覧になれます。
            <br />
            いざ！YMM4の世界へ！
          </Typography>
          <LinkButton href="/guide/YMM4/overview">Get Started</LinkButton>
        </Stack>
        {spacer}
        <Stack alignItems="flex-start" spacing={8}>
          <Typography variant="h2">News</Typography>
          <Typography css={paragraphStyles}>
            アップデートや、バグ・エラーなどの情報をまとめています。
          </Typography>
          <LinkButton href="/news/overview">News</LinkButton>
        </Stack>
        {spacer}
        <Stack alignItems="flex-start" spacing={8}>
          <Typography variant="h2">Effects</Typography>
          <Typography css={paragraphStyles}>
           YMM4にあるエフェクト一覧です。
          </Typography>
          <LinkButton href="/effects/overview">Effects</LinkButton>
        </Stack>
        {spacer}
        <Stack alignItems="flex-start" spacing={8}>
          <Typography variant="h2">よくある質問</Typography>
          <Typography css={paragraphStyles}>
           FAQです。
           饅頭遣いのおもちゃ箱にある質問以外を詳しく書いています。
          </Typography>
          <LinkButton href="/faq/overview">FAQ</LinkButton>
        </Stack>
      </Box>
    </>
  );
};

const spacer = (
  <Box
    sx={{
      width: '100px',
      height: '1px',
      my: 16,
      background: theme.palette.grey[400],
    }}
  />
);

const paragraphStyles = css`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.3;
  color: ${theme.palette.grey[700]};
`;
