'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Download,
  PlayArrow,
  Android,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { Button } from '../../shared/components';

export const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const t = useTranslations('hero');

  const handleDownload = () => {
    window.open('#download', '_self');
  };

  const handleDemo = () => {
    window.open('https://youtube.com/watch?v=demo', '_blank');
  };

  return (
    <Box
      id="hero"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 10,
        pb: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ color: 'white' }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '3rem' },
                  lineHeight: 1.2,
                }}
              >
                {t('title')}
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  opacity: 0.9,
                  fontWeight: 400,
                }}
              >
                {t('subtitle')}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  opacity: 0.8,
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                {t('description')}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                  mb: 4,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Download />}
                  onClick={handleDownload}
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'grey.100',
                    },
                  }}
                >
                  {t('downloadButton')}
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrow />}
                  onClick={handleDemo}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {t('watchDemo')}
                </Button>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {t('availableOn')}
                </Typography>
                <Android sx={{ fontSize: 24 }} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src="/placeholders/mockup-default.png"
                alt="Bridge App Mockup"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};