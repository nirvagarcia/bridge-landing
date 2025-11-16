'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Translate,
  RecordVoiceOver,
  Visibility,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { Button } from '../../shared/components';
import { VideoModal } from '../../shared/components/VideoModal';

const FloatingIcon = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const t = useTranslations('hero');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Box
        sx={{
          minHeight: { xs: '90vh', md: '100vh' },
          position: 'relative',
          overflow: { xs: 'visible', md: 'hidden' },
          background:
            'linear-gradient(135deg, #0B7285 0%, #0891b2 50%, #0e7490 100%)',
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'center' },
          pt: { xs: 10, sm: 12, md: 8 },
          pb: { xs: 2, sm: 4, md: 0 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 20%, rgba(102, 217, 232, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
            `,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(45deg, transparent 48%, rgba(102, 217, 232, 0.03) 49%, rgba(102, 217, 232, 0.03) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(59, 130, 246, 0.03) 49%, rgba(59, 130, 246, 0.03) 51%, transparent 52%)
            `,
            backgroundSize: '60px 60px',
            animation: 'backgroundMove 20s linear infinite',
            '@keyframes backgroundMove': {
              '0%': { transform: 'translate(0, 0)' },
              '100%': { transform: 'translate(60px, 60px)' },
            },
          },
        }}
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;

          const glowElement = e.currentTarget.querySelector(
            '.cursor-glow'
          ) as HTMLElement;
          if (glowElement) {
            glowElement.style.background = `
              radial-gradient(
                500px circle at ${x}% ${y}%,
                rgba(102, 217, 232, 0.15) 0%,
                rgba(102, 217, 232, 0.08) 25%,
                rgba(255, 255, 255, 0.04) 50%,
                transparent 70%
              )
            `;
            glowElement.style.opacity = '1';
          }
        }}
        onMouseEnter={e => {
          const glowElement = e.currentTarget.querySelector(
            '.cursor-glow'
          ) as HTMLElement;
          if (glowElement) {
            glowElement.style.opacity = '1';
          }
        }}
        onMouseLeave={e => {
          const glowElement = e.currentTarget.querySelector(
            '.cursor-glow'
          ) as HTMLElement;
          if (glowElement) {
            glowElement.style.opacity = '0';
          }
        }}
      >
        <Box
          className="cursor-glow"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(
                500px circle at 50% 50%,
                rgba(102, 217, 232, 0.12) 0%,
                rgba(102, 217, 232, 0.06) 25%,
                rgba(255, 255, 255, 0.03) 50%,
                transparent 70%
              )
            `,
            opacity: 0,
            transition: 'opacity 0.4s ease-out',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '200px',
            height: '200px',
            background:
              'radial-gradient(circle, rgba(102, 217, 232, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease',
            zIndex: 2,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            right: '20%',
            width: '150px',
            height: '150px',
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease',
            zIndex: 2,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: { xs: '70px', md: '85px' },
            height: { xs: '70px', md: '85px' },
            background:
              'linear-gradient(135deg, rgba(102, 217, 232, 0.05), rgba(255, 255, 255, 0.02))',
            borderRadius: '50%',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(102, 217, 232, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background:
                'linear-gradient(135deg, rgba(102, 217, 232, 0.12), rgba(255, 255, 255, 0.08))',
              border: '1px solid rgba(102, 217, 232, 0.3)',
              transform: 'scale(1.1) translateY(-2px)',
              boxShadow:
                '0 8px 25px rgba(102, 217, 232, 0.2), inset 0 0 20px rgba(102, 217, 232, 0.1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                background:
                  'linear-gradient(45deg, transparent, rgba(102, 217, 232, 0.4), transparent)',
                borderRadius: '50%',
                zIndex: -1,
                animation: 'shimmer 1.5s linear infinite',
              },
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: '80%',
              height: '80%',
              background:
                'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 50%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            },
            '@keyframes shimmer': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
          }}
        >
          <FloatingIcon delay={0}>
            <Translate
              sx={{
                fontSize: 24,
                color: 'rgba(102, 217, 232, 0.8)',
              }}
            />
          </FloatingIcon>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            right: '15%',
            width: { xs: '65px', md: '78px' },
            height: { xs: '65px', md: '78px' },
            background:
              'linear-gradient(135deg, rgba(11, 114, 133, 0.04), rgba(255, 255, 255, 0.02))',
            borderRadius: '50%',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(11, 114, 133, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background:
                'linear-gradient(135deg, rgba(11, 114, 133, 0.15), rgba(255, 255, 255, 0.08))',
              border: '1px solid rgba(11, 114, 133, 0.35)',
              transform: 'scale(1.12) translateY(-3px)',
              boxShadow:
                '0 10px 30px rgba(11, 114, 133, 0.25), inset 0 0 25px rgba(11, 114, 133, 0.1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-3px',
                left: '-3px',
                right: '-3px',
                bottom: '-3px',
                background:
                  'linear-gradient(60deg, transparent, rgba(11, 114, 133, 0.5), transparent)',
                borderRadius: '50%',
                zIndex: -1,
                animation: 'shimmer 1.8s linear infinite',
              },
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '15%',
              left: '15%',
              width: '70%',
              height: '70%',
              background:
                'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.25), transparent 60%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            },
          }}
        >
          <FloatingIcon delay={1}>
            <RecordVoiceOver
              sx={{
                fontSize: 20,
                color: 'rgba(11, 114, 133, 0.8)',
              }}
            />
          </FloatingIcon>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '25%',
            width: { xs: '62px', md: '78px' },
            height: { xs: '62px', md: '78px' },
            background:
              'linear-gradient(135deg, rgba(8, 145, 178, 0.06), rgba(255, 255, 255, 0.03))',
            borderRadius: '50%',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(8, 145, 178, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background:
                'linear-gradient(135deg, rgba(8, 145, 178, 0.18), rgba(255, 255, 255, 0.08))',
              border: '1px solid rgba(8, 145, 178, 0.4)',
              transform: 'scale(1.15) translateY(-4px)',
              boxShadow:
                '0 12px 35px rgba(8, 145, 178, 0.3), inset 0 0 30px rgba(8, 145, 178, 0.12)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                background:
                  'linear-gradient(120deg, transparent, rgba(8, 145, 178, 0.6), transparent)',
                borderRadius: '50%',
                zIndex: -1,
                animation: 'shimmer 2s linear infinite',
              },
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '12%',
              left: '12%',
              width: '76%',
              height: '76%',
              background:
                'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.28), transparent 55%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            },
          }}
        >
          <FloatingIcon delay={2}>
            <Visibility
              sx={{
                fontSize: { xs: '20px', md: '22px' },
                color: 'rgba(255, 255, 255, 0.4)',
              }}
            />
          </FloatingIcon>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '40%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: { xs: '48px', md: '62px' },
            height: { xs: '48px', md: '62px' },
            background:
              'linear-gradient(135deg, rgba(102, 217, 232, 0.08), rgba(255, 255, 255, 0.04))',
            borderRadius: '50%',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(102, 217, 232, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            animation: 'float 6s ease-in-out infinite',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background:
                'linear-gradient(135deg, rgba(102, 217, 232, 0.22), rgba(255, 255, 255, 0.1))',
              border: '1px solid rgba(102, 217, 232, 0.45)',
              transform: 'translateX(-50%) scale(1.2) translateY(-5px)',
              boxShadow:
                '0 15px 40px rgba(102, 217, 232, 0.35), inset 0 0 35px rgba(102, 217, 232, 0.15)',
              animation: 'floatHover 6s ease-in-out infinite',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-3px',
                left: '-3px',
                right: '-3px',
                bottom: '-3px',
                background:
                  'linear-gradient(90deg, transparent, rgba(102, 217, 232, 0.7), transparent)',
                borderRadius: '50%',
                zIndex: -1,
                animation: 'shimmer 1.2s linear infinite',
              },
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '8%',
              left: '8%',
              width: '84%',
              height: '84%',
              background:
                'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.35), transparent 45%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            },
            '@keyframes float': {
              '0%, 100%': { transform: 'translateX(-50%) translateY(0px)' },
              '50%': { transform: 'translateX(-50%) translateY(-10px)' },
            },
            '@keyframes floatHover': {
              '0%, 100%': {
                transform: 'translateX(-50%) scale(1.2) translateY(-5px)',
              },
              '50%': {
                transform: 'translateX(-50%) scale(1.2) translateY(-15px)',
              },
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '12px', md: '14px' },
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.35)',
              textAlign: 'center',
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            +
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: '70%',
            left: '3%',
            width: '100px',
            height: '4px',
            background:
              'linear-gradient(90deg, transparent, rgba(102, 217, 232, 0.3), transparent)',
            animation: 'slide 6s linear infinite',
            '@keyframes slide': {
              '0%': { transform: 'translateX(-20px)', opacity: 0 },
              '50%': { opacity: 1 },
              '100%': { transform: 'translateX(20px)', opacity: 0 },
            },
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: { xs: '55px', md: '65px' },
            height: { xs: '55px', md: '65px' },
            background:
              'linear-gradient(135deg, rgba(102, 217, 232, 0.05), rgba(255, 255, 255, 0.02))',
            borderRadius: '50%',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(102, 217, 232, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            animation: 'floatSlow 8s ease-in-out infinite',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background:
                'linear-gradient(135deg, rgba(102, 217, 232, 0.12), rgba(255, 255, 255, 0.08))',
              border: '1px solid rgba(102, 217, 232, 0.3)',
              transform: 'scale(1.1) translateY(-2px)',
              boxShadow:
                '0 8px 25px rgba(102, 217, 232, 0.2), inset 0 0 20px rgba(102, 217, 232, 0.1)',
            },
            '@keyframes floatSlow': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-15px)' },
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.4)',
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            AI
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '25%',
            left: '8%',
            width: '6px',
            height: '80px',
            background:
              'linear-gradient(180deg, transparent, rgba(102, 217, 232, 0.4), transparent)',
            animation: 'pulse 4s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { opacity: 0.3 },
              '50%': { opacity: 1 },
            },
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            right: '5%',
            width: '2px',
            height: '60px',
            background:
              'linear-gradient(180deg, rgba(102, 217, 232, 0.6), transparent)',
            animation: 'fadeUpDown 5s ease-in-out infinite',
            '@keyframes fadeUpDown': {
              '0%, 100%': { opacity: 0.2, transform: 'scaleY(0.8)' },
              '50%': { opacity: 1, transform: 'scaleY(1)' },
            },
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 3,
            px: { xs: 2, sm: 3, md: 3 },
            width: '100%',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <Box
                  sx={{
                    color: 'white',
                    mb: { xs: 1, md: 4 },
                    px: { xs: 1, sm: 2, md: 0 },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 800,
                        mb: { xs: 1.5, sm: 2, md: 3 },
                        fontSize: {
                          xs: '2.5rem',
                          sm: '2.4rem',
                          md: '2.8rem',
                          lg: '3.5rem',
                        },
                        lineHeight: { xs: 1.3, sm: 1.3, md: 1.1 },
                        color: '#ffffff',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        wordWrap: 'normal',
                        overflowWrap: 'normal',
                        whiteSpace: 'normal',
                      }}
                    >
                      {t('title')}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        mb: { xs: 2, sm: 3, md: 4 },
                        opacity: 0.95,
                        fontWeight: 400,
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.25rem' },
                        lineHeight: 1.5,
                        color: 'rgba(255, 255, 255, 0.9)',
                      }}
                    >
                      {t('subtitle')}
                    </Typography>
                  </motion.div>
                </Box>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'stretch', sm: 'center' },
                      mb: 4,
                    }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<Download />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        background:
                          'linear-gradient(135deg, #66D9E8 0%, #5DADE2 100%)',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(102, 217, 232, 0.2)',
                        '&:hover': {
                          background:
                            'linear-gradient(135deg, #5DADE2 0%, #48CAE4 100%)',
                          boxShadow: '0 6px 20px rgba(102, 217, 232, 0.25)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      {t('downloadApp')}
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={<PlayArrow />}
                      onClick={() => setIsVideoModalOpen(true)}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          borderColor: 'rgba(102, 217, 232, 0.6)',
                          backgroundColor: 'rgba(102, 217, 232, 0.1)',
                          boxShadow: '0 8px 25px rgba(102, 217, 232, 0.2)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      {t('watchVideo')}
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      px: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.9,
                          fontWeight: 500,
                          color: 'white',
                        }}
                      >
                        {t('availableOn')}
                      </Typography>
                      <Android
                        sx={{
                          fontSize: 24,
                          color: '#66D9E8',
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
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
                        position: 'relative',
                        zIndex: 1,
                        borderRadius: '16px',
                      }}
                    />
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="Hev6bMKKEao"
      />
    </>
  );
};
