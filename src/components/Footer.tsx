import { SITE_NAME } from '@/config/app';
import { X } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { Container } from './Container';
import { Link } from './Link';
import Image from 'next/image'

export const Footer = () => {
  return (
    <Box component="footer" sx={{ width: '100%', py: 12, userSelect: 'none' }}>
      <Container>
        <Stack
          direction="column"
          justifyContent="space-bwtween"
          alignItems="center"
          spacing={4}
        >
          <Stack
            sx={{
              flexDirection: {
                lg: 'row',
              },
              justifyContent: {
                lg: 'space-between',
              },
              alignItems: 'center',
              gap: 4,
              width: '100%',
            }}
          >
            <Link href="/">
              <Typography component="span" variant="h3">
                {SITE_NAME}
              </Typography>
            </Link>
            <Stack direction="row" justifyContent="center" spacing={5}>
              <Link href="https://x.com/YMM4_info" aria-label="link to X(Twitter) Account">
                <X sx={{ fontSize: 32 }} />
              </Link>
              <Link href="https://discord.gg/De56CXbpm6" aria-label="link to Disocrd Server">
              <Image
                src="/assets/discordIcon.png"
                width={32}
                height={24.3}
                alt="link to Disocrd Server"
                sx={{marginTop: "4px"}}
                />
              </Link>
            </Stack>
          </Stack>
          <Typography component="small" fontSize={14}>
            Copyright &copy; {new Date().getFullYear()} {SITE_NAME}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
