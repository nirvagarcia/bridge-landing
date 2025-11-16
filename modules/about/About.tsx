'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Accessibility,
  Psychology,
  Groups,
  TrendingUp,
  LightbulbOutlined,
  FavoriteOutlined,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.6,
      delay,
      ease: 'easeOut',
    }}
    viewport={{ once: true, margin: '-100px' }}
  >
    {children}
  </motion.div>
);

export const About = () => {
  const t = useTranslations('about');

  const values = [
    {
      icon: <Accessibility sx={{ fontSize: 56, color: '#0B7285' }} />,
      title: t('mission'),
      description: t('missionText'),
      gradient:
        'linear-gradient(135deg, rgba(11, 114, 133, 0.1), rgba(102, 217, 232, 0.1))',
      accentIcon: <TrendingUp sx={{ fontSize: 24, color: '#66D9E8' }} />,
    },
    {
      icon: <Psychology sx={{ fontSize: 56, color: '#0B7285' }} />,
      title: t('vision'),
      description: t('visionText'),
      gradient:
        'linear-gradient(135deg, rgba(102, 217, 232, 0.1), rgba(11, 114, 133, 0.1))',
      accentIcon: <LightbulbOutlined sx={{ fontSize: 24, color: '#66D9E8' }} />,
    },
    {
      icon: <Groups sx={{ fontSize: 56, color: '#0B7285' }} />,
      title: t('values'),
      description: t('valuesText'),
      gradient:
        'linear-gradient(135deg, rgba(11, 114, 133, 0.15), rgba(102, 217, 232, 0.05))',
      accentIcon: <FavoriteOutlined sx={{ fontSize: 24, color: '#66D9E8' }} />,
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 12,
        background:
          'linear-gradient(135deg, #FAFAFA 0%, #F5F9FA 50%, #FAFAFA 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '300px',
          height: '300px',
          background:
            'radial-gradient(circle, rgba(102, 217, 232, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '250px',
          height: '250px',
          background:
            'radial-gradient(circle, rgba(11, 114, 133, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                gap: 2,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  background:
                    'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('title')}
              </Typography>
            </Box>

            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: '1.25rem',
              }}
            >
              {t('subtitle')}
            </Typography>

            <Box
              sx={{
                maxWidth: 900,
                mx: 'auto',
                background:
                  'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(245, 249, 250, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '1px solid rgba(11, 114, 133, 0.1)',
                p: 4,
                boxShadow: '0 8px 32px rgba(11, 114, 133, 0.1)',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.2rem',
                  lineHeight: 1.7,
                  color: 'text.primary',
                  fontWeight: 400,
                }}
              >
                {t('description')}
              </Typography>
            </Box>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FloatingElement delay={index * 0.2}>
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(11, 114, 133, 0.15)',
                      borderRadius: '24px',
                      p: 1,
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(11, 114, 133, 0.1)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        boxShadow: '0 16px 48px rgba(11, 114, 133, 0.2)',
                        border: '1px solid rgba(11, 114, 133, 0.25)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background:
                          'linear-gradient(90deg, #0B7285, #66D9E8, #0B7285)',
                        opacity: 0.8,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: value.gradient,
                        opacity: 0.3,
                      }}
                    />

                    <CardContent
                      sx={{ p: 4, position: 'relative', textAlign: 'center' }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                        }}
                      >
                        <Box
                          sx={{
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            background:
                              'linear-gradient(135deg, rgba(11, 114, 133, 0.1), rgba(102, 217, 232, 0.1))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            border: '2px solid rgba(11, 114, 133, 0.2)',
                          }}
                        >
                          {value.icon}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: -8,
                              right: -8,
                              width: 32,
                              height: 32,
                              borderRadius: '50%',
                              background:
                                'linear-gradient(135deg, #0B7285, #66D9E8)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 4px 12px rgba(11, 114, 133, 0.3)',
                            }}
                          >
                            {value.accentIcon}
                          </Box>
                        </Box>
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 3,
                          background:
                            'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                        }}
                      >
                        {value.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.primary',
                          lineHeight: 1.6,
                          fontSize: '1rem',
                          opacity: 0.9,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </FloatingElement>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
