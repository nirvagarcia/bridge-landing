'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Instagram,
  Email,
  Favorite,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { APP_CONFIG } from '../../utils/constants';

export const Footer = () => {
  const theme = useTheme();
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');

  const navigationLinks = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'impact', href: '#impact' },
    { key: 'howItWorks', href: '#how-it-works' },
    { key: 'team', href: '#team' },
    { key: 'vision', href: '#vision' },
  ];

  const socialLinks = [
    { icon: <GitHub />, href: APP_CONFIG.social.github },
    { icon: <LinkedIn />, href: APP_CONFIG.social.linkedin },
    { icon: <Instagram />, href: APP_CONFIG.social.instagram },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.900',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              Bridge
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
              {t('tagline')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((link, index) => (
                <IconButton
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t('quickLinks')}
            </Typography>
            {navigationLinks.map(link => (
              <Typography
                key={link.key}
                variant="body2"
                sx={{
                  cursor: 'pointer',
                  opacity: 0.8,
                  mb: 1,
                  '&:hover': {
                    opacity: 1,
                    color: 'primary.light',
                  },
                }}
                onClick={() => scrollToSection(link.href)}
              >
                {tNav(link.key as any)}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t('contact')}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
              {APP_CONFIG.email}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
              {APP_CONFIG.location}
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t('legal')}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                cursor: 'pointer',
                opacity: 0.8,
                mb: 1,
                '&:hover': {
                  opacity: 1,
                  color: 'primary.light',
                },
              }}
            >
              {t('privacy')}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                cursor: 'pointer',
                opacity: 0.8,
                mb: 1,
                '&:hover': {
                  opacity: 1,
                  color: 'primary.light',
                },
              }}
            >
              {t('terms')}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'grey.700' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {t('copyright')}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              opacity: 0.8,
            }}
          >
            {t('madeIn')}
            <Favorite sx={{ color: 'red', fontSize: 16 }} />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
