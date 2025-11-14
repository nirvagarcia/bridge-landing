'use client';

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from './Button';
import { LanguageSelector } from './LanguageSelector';

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const t = useTranslations('navigation');

  const navigationItems = [
    { key: 'about', href: '#about' },
    { key: 'impact', href: '#impact' },
    { key: 'howItWorks', href: '#how-it-works' },
    { key: 'team', href: '#team' },
    { key: 'vision', href: '#vision' },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'background.default',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/placeholders/bridge_horizontal_logo.png"
              alt="Bridge Logo"
              sx={{
                height: { xs: 30, sm: 40 },
                width: 'auto',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => scrollToSection('#hero')}
            />
          </Box>

          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {navigationItems.map(item => (
                <Typography
                  key={item.key}
                  sx={{
                    cursor: 'pointer',
                    color: 'text.primary',
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                  onClick={() => scrollToSection(item.href)}
                >
                  {t(item.key as any)}
                </Typography>
              ))}
            </Box>
          ) : null}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LanguageSelector />

            <Button
              variant="contained"
              color="primary"
              onClick={() => scrollToSection('#download')}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              {t('download')}
            </Button>

            {isMobile && (
              <>
                <IconButton onClick={handleMenuOpen} color="primary">
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {navigationItems.map(item => (
                    <MenuItem
                      key={item.key}
                      onClick={() => scrollToSection(item.href)}
                    >
                      {t(item.key as any)}
                    </MenuItem>
                  ))}
                  <MenuItem onClick={() => scrollToSection('#download')}>
                    {t('download')}
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
