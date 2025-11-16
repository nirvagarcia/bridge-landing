'use client';

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Info as InfoIcon,
  TrendingUp as TrendingUpIcon,
  Build as BuildIcon,
  Group as GroupIcon,
  Visibility as VisionIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { LanguageSelector } from './LanguageSelector';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const t = useTranslations('navigation');

  const navigationItems = [
    { key: 'about', href: '#about', icon: InfoIcon },
    { key: 'howItWorks', href: '#how-it-works', icon: BuildIcon },
    { key: 'impact', href: '#impact', icon: TrendingUpIcon },
    { key: 'team', href: '#team', icon: GroupIcon },
    { key: 'vision', href: '#vision', icon: VisionIcon },
  ];

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleMobileMenuClose();
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
                <IconButton
                  onClick={handleMobileMenuToggle}
                  color="primary"
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(90deg)',
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>

                <Drawer
                  anchor="right"
                  open={mobileMenuOpen}
                  onClose={handleMobileMenuClose}
                  sx={{
                    '& .MuiDrawer-paper': {
                      width: { xs: '100vw', sm: 360 },
                      maxWidth: '90vw',
                      background:
                        'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
                      backdropFilter: 'blur(20px)',
                      borderLeft: '1px solid rgba(11, 114, 133, 0.1)',
                      boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                      height: '100vh',
                      overflowY: 'auto',
                    },
                  }}
                >
                  <Box
                    sx={{
                      pt: 2,
                      pb: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 3,
                        mb: 3,
                        minHeight: 64,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          background:
                            'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        <Box
                          component="img"
                          src="/placeholders/bridge_horizontal_logo.png"
                          alt="Bridge"
                          sx={{
                            height: 32,
                            width: 'auto',
                          }}
                        />
                      </Typography>
                      <IconButton
                        onClick={handleMobileMenuClose}
                        sx={{
                          color: 'text.secondary',
                          '&:hover': {
                            color: 'primary.main',
                            transform: 'rotate(90deg)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>

                    <Divider sx={{ mb: 2, mx: 2 }} />

                    <List sx={{ px: 0, overflow: 'hidden', flex: 1 }}>
                      <AnimatePresence>
                        {navigationItems.map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <motion.div
                              key={item.key}
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                              <ListItem
                                onClick={() => scrollToSection(item.href)}
                                sx={{
                                  borderRadius: 2,
                                  mb: 1,
                                  mx: 2,
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    backgroundColor: 'rgba(11, 114, 133, 0.08)',
                                    transform: 'translateX(4px)',
                                    boxShadow:
                                      '0 4px 12px rgba(11, 114, 133, 0.15)',
                                  },
                                }}
                              >
                                <ListItemIcon
                                  sx={{ minWidth: 40, color: 'primary.main' }}
                                >
                                  <IconComponent />
                                </ListItemIcon>
                                <ListItemText
                                  primary={t(item.key as any)}
                                  primaryTypographyProps={{
                                    fontWeight: 500,
                                    fontSize: '1.1rem',
                                  }}
                                />
                              </ListItem>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </List>

                    <Divider sx={{ my: 2, mx: 2 }} />

                    <Box sx={{ px: 3, mt: 'auto', pb: 2 }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={() => scrollToSection('#download')}
                          startIcon={<DownloadIcon />}
                          sx={{
                            py: 1.5,
                            fontSize: '1.1rem',
                            borderRadius: 3,
                            background:
                              'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                            boxShadow: '0 8px 25px rgba(11, 114, 133, 0.3)',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 12px 35px rgba(11, 114, 133, 0.4)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {t('download')}
                        </Button>
                      </motion.div>
                    </Box>
                  </Box>
                </Drawer>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
