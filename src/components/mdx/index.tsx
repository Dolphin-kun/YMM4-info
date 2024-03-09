/* eslint-disable @typescript-eslint/no-explicit-any */
import { theme } from '@/styles/theme';
import { Box, List, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { CodeBlock } from '../CodeBlock';
import { Link } from '../Link';

export const components: {
  [key: string]: any;
} = {
  p: (props: any) => (
    <Box
      component="p"
      sx={{ mt: 2, mb: 0, lineHeight: '1.75rem', fontSize: '15px' }}
      {...props}
    />
  ),
  ul: (props: any) => (
    <List component="ul" sx={{ mt: 0, mb: 0, fontSize: '15px' }} {...props} />
  ),
  li: (props: any) => (
    <Box
      component="li"
      sx={{
        listStyle: 'inside',
        '>ul >li':{
          listStyle: 'circle',
          marginLeft: '2rem'
        },
      }}
      {...props}
    />
  ),
  ol: (props: any) => (
    <Box
      component="li"
      sx={{
        margin: '0px',
      }}
      {...props}
    />
  ),
  hr: (props: any) => (
    <Box
      component="hr"
      sx={{
        margin: '2em 0em',
      }}
      {...props}
    />
  ),
  pre: CodeBlock,
  a: ({ href, ...props }: any) => (
    <Link
      href={href}
      css={{
        textDecoration: 'underline',
        transitionDuration: '200ms',
        ':hover': { color: '#0077ff' },
      }}
      {...props}
    />
  ),
  code: (props: any) => (
    <Box
      component="code"
      sx={{
        whiteSpace: 'nowrap',
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        margin: '0 2px',
        padding: '2px 0.25em',
        fontSize: '0.9em',
        border: 1,
        borderRadius: '0.375rem',
        borderColor: theme.palette.grey[300],
        color: theme.palette.grey[800],
        backgroundColor: theme.palette.grey[100],
      }}
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <Box
      component="blockquote"
      sx={{
        margin: '1em 0em',
        padding: '1em',
        backgroundColor: blue[50],
        color: theme.palette.grey[800],
        borderLeft: 3,
        borderColor: blue[800],
        '> p':{
          margin:'0px',
        },
      }}
      {...props}
    />
  ),
  table: (props: any) => (
    <Box
      component="table"
      sx={{
        borderCollapse: 'collapse',
        border: 1,
        textAlign: 'center',
        margin: '1em 0em',
        maxWidth: '100%',
        minWidth: '50%',
        '> thead > tr > th':{
          backgroundColor:grey[100],
          border: 1,
        },
        '> tbody > tr > td':{
          border: 1,
          padding: "0px 10px",
        },
      }}
      {...props}
    />
  ),
  img: (props: any) => (
    <Box
      component="img"
      sx={{
        display: 'block',
        margin: '1em auto',
        maxWidth: '90%', // 画像が親要素の幅を超えないようにする
        maxHeight: '300px',
        height: 'auto',   // アスペクト比を保ったまま高さを調整
        boxShadow: 3,
      }}
      {...props}
    />
  ),
  iframe: (props: any) => (
    <Box
      component="iframe"
      sx={{
        display: 'block',
        margin: 'auto',
        maxWidth: '90%', // 画像が親要素の幅を超えないようにする
        maxHeight: '300px',
        height: 'auto',   // アスペクト比を保ったまま高さを調整
        border: 1,
        borderColor: blue[800],
      }}
      {...props}
    />
  ),
  h1: (props: any) => <Typography variant="h1" sx={{ mb: '2rem' }} {...props} />,
  h2: (props: any) => (
    <Typography
      variant="h2"
      sx={{
        mt: 10,
        pb: 1,
        borderBottom: 1,
        borderColor: theme.palette.grey[300],
      }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography
      variant="h3"
      sx={{
        mt: 8,
      }}
      {...props}
    />
  ),
  h4: (props: any) => (
    <Typography
      variant="h4"
      sx={{
        mt: 5,
      }}
      {...props}
    />
  ),
};
