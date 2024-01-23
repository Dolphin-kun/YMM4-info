import { SITE_NAME } from '@/config/app';
import { resolveUrl } from '@/lib/url';
import { Stack } from '@mui/system';
import { useRouter } from 'next/router';
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  XIcon,
  TwitterShareButton,
} from 'react-share';

type Props = {
  title: string;
};

const ICON_SIZE = 40;

export const Share = ({ title }: Props) => {
  const router = useRouter();
  const url = resolveUrl(router.asPath);

  return (
    <Stack direction="row" justifyContent="flex-end" spacing={5}>
      <FacebookShareButton title={title} url={"\n"+url}>
        <FacebookIcon size={ICON_SIZE} round />
      </FacebookShareButton>
      <TwitterShareButton
        title={title}
        url={"\n"+url}
        hashtags={[SITE_NAME]}
      >
        <XIcon size={ICON_SIZE} round />
      </TwitterShareButton>
      <LineShareButton title={title} url={"\n"+url}>
        <LineIcon size={ICON_SIZE} round />
      </LineShareButton>
    </Stack>
  );
};
