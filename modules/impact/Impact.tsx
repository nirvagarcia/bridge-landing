'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  People,
  Translate,
  Speed,
  ThumbUp,
  FormatQuote,
  Star,
  TrendingUp,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export const Impact = () => {
  const theme = useTheme();
  const t = useTranslations('impact');
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  const testimonials: Testimonial[] = [
    {
      quote: t('testimonial2'),
      author: 'Rosa Mendoza',
      role: t('testimonialAuthor2'),
      avatar: '/placeholders/user1.jpg',
      rating: 5,
    },
    {
      quote: t('testimonial3'),
      author: 'Carlos Vega',
      role: t('testimonialAuthor3'),
      avatar: '/placeholders/user2.jpg',
      rating: 5,
    },
    {
      quote: t('testimonial4'),
      author: 'Prof. Ana López',
      role: t('testimonialAuthor4'),
      avatar: '/placeholders/user3.jpg',
      rating: 5,
    },
    {
      quote: t('testimonial1'),
      author: 'Miguel Torres',
      role: t('testimonialAuthor1'),
      avatar: '/placeholders/user4.jpg',
      rating: 5,
    },
  ];

  const metrics = [
    {
      icon: <People sx={{ fontSize: 40 }} />,
      value: 150,
      suffix: '+',
      label: t('users'),
      color: '#0B7285',
    },
    {
      icon: <Translate sx={{ fontSize: 40 }} />,
      value: 5000,
      suffix: '+',
      label: t('translations'),
      color: '#66D9E8',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      value: 94,
      suffix: '%',
      label: t('accuracy'),
      color: '#0B7285',
    },
    {
      icon: <ThumbUp sx={{ fontSize: 40 }} />,
      value: 98,
      suffix: '%',
      label: t('satisfaction'),
      color: '#66D9E8',
    },
  ];

  useEffect(() => {
    const timers = metrics.map((metric, index) => {
      return setTimeout(() => {
        let start = 0;
        const end = metric.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setAnimatedValues(prev => {
              const newValues = [...prev];
              newValues[index] = end;
              return newValues;
            });
            clearInterval(timer);
          } else {
            setAnimatedValues(prev => {
              const newValues = [...prev];
              newValues[index] = Math.floor(start);
              return newValues;
            });
          }
        }, 16);
      }, index * 200);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <Box
      id="impact"
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #fafafa 0%, #f0f9ff 100%)',
        '@keyframes spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
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
                mb: 3,
                color: 'text.secondary',
                fontWeight: 400,
                fontSize: '1.25rem',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              {t('subtitle')}
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            position: 'relative',
            mb: 10,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'radial-gradient(ellipse at center, rgba(11, 114, 133, 0.03) 0%, transparent 70%)',
              borderRadius: '24px',
              zIndex: 0,
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  p: { xs: 4, md: 6 },
                  mb: 4,
                  background:
                    'linear-gradient(135deg, rgba(11, 114, 133, 0.08) 0%, rgba(102, 217, 232, 0.08) 100%), rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(11, 114, 133, 0.15)',
                  borderRadius: '32px',
                  boxShadow:
                    '0 16px 48px rgba(11, 114, 133, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '6px',
                    background:
                      'linear-gradient(90deg, #0B7285, #66D9E8, #0B7285)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <Box
                    sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 900,
                        fontSize: { xs: '4rem', md: '6rem' },
                        background:
                          'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 0.9,
                        mb: 1,
                      }}
                    >
                      {animatedValues[1]}
                      {metrics[1].suffix}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {metrics[1].label}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '18px',
                        lineHeight: 1.6,
                        maxWidth: '400px',
                        mx: { xs: 'auto', md: 0 },
                      }}
                    >
                      {t('description')}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      flex: { xs: 'none', md: 1 },
                      display: 'flex',
                      justifyContent: 'center',
                      position: 'relative',
                      height: { xs: 200, md: 280 },
                      width: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.1,
                        background: `
                          radial-gradient(circle at 20% 20%, #0B7285 2px, transparent 2px),
                          radial-gradient(circle at 60% 40%, #66D9E8 1px, transparent 1px),
                          radial-gradient(circle at 80% 70%, #0B7285 1.5px, transparent 1.5px),
                          radial-gradient(circle at 30% 80%, #66D9E8 2px, transparent 2px)
                        `,
                        backgroundSize:
                          '50px 50px, 30px 30px, 40px 40px, 60px 60px',
                      }}
                    />

                    <Box
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      {[
                        { icon: <People />, top: '15%', left: '15%', delay: 0 },
                        {
                          icon: <Translate />,
                          top: '20%',
                          right: '20%',
                          delay: 0.5,
                        },
                        {
                          icon: <FormatQuote />,
                          bottom: '25%',
                          left: '10%',
                          delay: 1,
                        },
                        {
                          icon: <ThumbUp />,
                          bottom: '20%',
                          right: '15%',
                          delay: 1.5,
                        },
                        { icon: <Star />, top: '45%', left: '5%', delay: 2 },
                        {
                          icon: <TrendingUp />,
                          top: '40%',
                          right: '8%',
                          delay: 2.5,
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                            scale: [0.8, 1.2, 0.8],
                            y: [-5, 5, -5],
                          }}
                          transition={{
                            duration: 3,
                            delay: item.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          style={{
                            position: 'absolute',
                            ...item,
                          }}
                        >
                          <Box
                            sx={{
                              width: { xs: 32, md: 40 },
                              height: { xs: 32, md: 40 },
                              borderRadius: '50%',
                              background:
                                'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              boxShadow: '0 4px 12px rgba(11, 114, 133, 0.3)',
                              fontSize: { xs: 16, md: 20 },
                            }}
                          >
                            {item.icon}
                          </Box>
                        </motion.div>
                      ))}

                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 100, md: 140 },
                            height: { xs: 100, md: 140 },
                            borderRadius: '50%',
                            background:
                              'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 16px 32px rgba(11, 114, 133, 0.4)',
                            position: 'relative',
                            zIndex: 2,
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: -12,
                              left: -12,
                              right: -12,
                              bottom: -12,
                              borderRadius: '50%',
                              background:
                                'conic-gradient(#0B7285, #66D9E8, #0B7285, #66D9E8)',
                              opacity: 0.3,
                              animation: 'spin 12s linear infinite',
                            },
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: -6,
                              left: -6,
                              right: -6,
                              bottom: -6,
                              borderRadius: '50%',
                              background:
                                'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                              animation: 'spin 8s linear infinite reverse',
                            },
                          }}
                        >
                          <Translate
                            sx={{
                              fontSize: { xs: 40, md: 60 },
                              color: 'white',
                              zIndex: 1,
                            }}
                          />
                        </Box>
                      </motion.div>

                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '30%',
                            left: '20%',
                            width: '25%',
                            height: '1px',
                            background:
                              'linear-gradient(90deg, transparent, #66D9E8, transparent)',
                            transform: 'rotate(45deg)',
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '30%',
                            right: '20%',
                            width: '25%',
                            height: '1px',
                            background:
                              'linear-gradient(90deg, transparent, #0B7285, transparent)',
                            transform: 'rotate(-45deg)',
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Card>
            </motion.div>

            <Grid container spacing={3}>
              {[metrics[0], metrics[2], metrics[3]].map(
                (metric, actualIndex) => {
                  const index = actualIndex === 0 ? 0 : actualIndex + 1;
                  return (
                    <Grid item xs={12} md={4} key={actualIndex}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: actualIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card
                          sx={{
                            p: 4,
                            height: '100%',
                            background: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(11, 114, 133, 0.1)',
                            borderRadius: '20px',
                            boxShadow: '0 8px 24px rgba(11, 114, 133, 0.08)',
                            textAlign: 'center',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            overflow: 'hidden',
                            '&:hover': {
                              transform: 'translateY(-8px)',
                              boxShadow: '0 16px 32px rgba(11, 114, 133, 0.15)',
                              border: '1px solid rgba(11, 114, 133, 0.2)',
                            },
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '60%',
                              height: '3px',
                              background: `linear-gradient(90deg, transparent, ${metric.color}, transparent)`,
                              borderRadius: '0 0 6px 6px',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 64,
                              height: 64,
                              borderRadius: '16px',
                              background: `linear-gradient(135deg, ${metric.color}15, ${metric.color}25)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mx: 'auto',
                              mb: 3,
                              color: metric.color,
                            }}
                          >
                            {metric.icon}
                          </Box>

                          <Typography
                            variant="h3"
                            sx={{
                              fontWeight: 800,
                              color: metric.color,
                              mb: 1,
                              fontSize: { xs: '2rem', md: '2.5rem' },
                            }}
                          >
                            {animatedValues[index]}
                            {metric.suffix}
                          </Typography>

                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: 'text.primary',
                              fontWeight: 600,
                              mb: 1,
                            }}
                          >
                            {metric.label}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              fontSize: '14px',
                              lineHeight: 1.5,
                            }}
                          >
                            {actualIndex === 0 && t('users')}
                            {actualIndex === 1 && t('accuracy')}
                            {actualIndex === 2 && t('satisfaction')}
                          </Typography>
                        </Card>
                      </motion.div>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Box>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
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
                {t('testimonialsTitle')}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              {t('testimonialsSubtitle')}
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              py: 4,
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: { xs: '60px', md: '120px' },
                zIndex: 2,
                pointerEvents: 'none',
              },
              '&::before': {
                left: 0,
                background:
                  'linear-gradient(90deg, #fafafa 0%, transparent 100%)',
              },
              '&::after': {
                right: 0,
                background:
                  'linear-gradient(270deg, #fafafa 0%, transparent 100%)',
              },
            }}
          >
            <motion.div
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                display: 'flex',
                gap: '24px',
                marginBottom: '24px',
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={`row1-${index}`}
                  sx={{
                    minWidth: { xs: '280px', md: '320px' },
                    maxWidth: { xs: '280px', md: '320px' },
                    p: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(11, 114, 133, 0.1)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 30px rgba(11, 114, 133, 0.15)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar
                      src={testimonial.avatar}
                      sx={{
                        width: 48,
                        height: 48,
                        border: '2px solid rgba(11, 114, 133, 0.2)',
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: '14px',
                        }}
                      >
                        {testimonial.author}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '12px',
                          display: 'block',
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            sx={{
                              color: '#0B7285',
                              fontSize: 14,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      lineHeight: 1.5,
                      fontSize: '14px',
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 2,
                      pt: 2,
                      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        <ThumbUp sx={{ fontSize: 14, color: '#0B7285' }} />
                        <Typography
                          variant="caption"
                          sx={{ color: 'text.secondary', fontSize: '11px' }}
                        >
                          {(((index + 1) * 7) % 50) + 10}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        <FormatQuote sx={{ fontSize: 14, color: '#66D9E8' }} />
                        <Typography
                          variant="caption"
                          sx={{ color: 'text.secondary', fontSize: '11px' }}
                        >
                          {(((index + 2) * 3) % 10) + 2}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', fontSize: '10px' }}
                    >
                      {((index + 5) % 7) + 1}d
                    </Typography>
                  </Box>
                </Card>
              ))}
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
