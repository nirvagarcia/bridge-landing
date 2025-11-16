'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  useTheme,
  Stack,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Instagram,
  Email,
  LocationOn,
  Launch,
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
    { icon: <GitHub />, href: APP_CONFIG.social.github, label: 'GitHub' },
    { icon: <LinkedIn />, href: APP_CONFIG.social.linkedin, label: 'LinkedIn' },
    {
      icon: <Instagram />,
      href: APP_CONFIG.social.instagram,
      label: 'Instagram',
    },
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
        background:
          'linear-gradient(135deg, #0B7285 0%, #066080 50%, #044B5C 100%)',
        color: 'white',
        pt: 12,
        pb: 6,
        mt: 12,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    background:
                      'linear-gradient(135deg, #ffffff 0%, #E8F7FA 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Bridge
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    opacity: 0.9,
                    fontWeight: 500,
                    letterSpacing: '0.5px',
                  }}
                >
                  Conectando el futuro
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.8,
                  lineHeight: 1.7,
                  maxWidth: '320px',
                }}
              >
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
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 700,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  backgroundColor: '#E8F7FA',
                },
              }}
            >
              {t('quickLinks')}
            </Typography>
            <Stack spacing={1.5}>
              {navigationLinks.map(link => (
                <Typography
                  key={link.key}
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    opacity: 0.8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      color: '#E8F7FA',
                      transform: 'translateX(4px)',
                    },
                  }}
                  onClick={() => scrollToSection(link.href)}
                >
                  <Launch sx={{ fontSize: 14 }} />
                  {tNav(link.key as any)}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 700,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  backgroundColor: '#E8F7FA',
                },
              }}
            >
              {t('contact')}
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Email sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {APP_CONFIG.email}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LocationOn sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Lima, Perú
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 700,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  backgroundColor: '#E8F7FA',
                },
              }}
            >
              Recursos
            </Typography>
            <Stack spacing={1.5}>
              <Typography
                variant="body2"
                sx={{
                  cursor: 'pointer',
                  opacity: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    color: '#E8F7FA',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Launch sx={{ fontSize: 14 }} />
                {t('privacy')}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  cursor: 'pointer',
                  opacity: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    color: '#E8F7FA',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Launch sx={{ fontSize: 14 }} />
                {t('terms')}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  cursor: 'pointer',
                  opacity: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    color: '#E8F7FA',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Launch sx={{ fontSize: 14 }} />
                Soporte
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 6,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            height: 2,
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            © {new Date().getFullYear()} Bridge. Todos los derechos reservados.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              opacity: 0.8,
            }}
          >
            <Typography variant="body2">Hecho en Lima, Perú</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
