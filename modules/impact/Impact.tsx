'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  People,
  Translate,
  Speed,
  ThumbUp,
  FormatQuote,
  ArrowBackIos,
  ArrowForwardIos,
  Star,
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  const testimonials: Testimonial[] = [
    {
      quote:
        'Bridge ha cambiado mi manera de comunicarme. Ahora puedo expresar mis ideas sin barreras.',
      author: 'Rosa Mendoza',
      role: 'Usuaria de Bridge',
      avatar: '/placeholders/user1.jpg',
      rating: 5,
    },
    {
      quote:
        'La precisión de la traducción es increíble. Me siento más incluida en conversaciones cotidianas.',
      author: 'Carlos Vega',
      role: 'Estudiante sordo',
      avatar: '/placeholders/user2.jpg',
      rating: 5,
    },
    {
      quote:
        'Esta app ha revolucionado la forma en que me comunico con mis estudiantes sordos.',
      author: 'Prof. Ana López',
      role: 'Educadora',
      avatar: '/placeholders/user3.jpg',
      rating: 5,
    },
    {
      quote:
        'Bridge me ha dado la confianza para participar más activamente en reuniones de trabajo.',
      author: 'Miguel Torres',
      role: 'Profesional sordo',
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animate numbers on component mount
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

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #fafafa 0%, #f0f9ff 100%)',
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
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: 'primary.main',
                background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('title')}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              {t('subtitle')}
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} sx={{ mb: 10 }}>
          {metrics.map((metric, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    background: `linear-gradient(135deg, ${metric.color}10 0%, ${metric.color}05 100%)`,
                    border: `2px solid ${metric.color}20`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${metric.color} 0%, ${metric.color}80 100%)`,
                    },
                    '&:hover': {
                      boxShadow: `0 12px 40px ${metric.color}25`,
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: metric.color,
                          width: 70,
                          height: 70,
                          mx: 'auto',
                          mb: 3,
                          boxShadow: `0 8px 24px ${metric.color}40`,
                        }}
                      >
                        {metric.icon}
                      </Avatar>
                    </motion.div>

                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 'bold',
                        color: metric.color,
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                      }}
                    >
                      {animatedValues[index]}
                      {metric.suffix}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        fontSize: '0.875rem',
                        letterSpacing: 1,
                      }}
                    >
                      {metric.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 2,
              }}
            >
              Lo que dicen nuestros usuarios
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Testimonios reales de personas que han transformado su
              comunicación con Bridge
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
            <Card
              sx={{
                p: 6,
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                boxShadow: '0 20px 60px rgba(11, 114, 133, 0.1)',
                borderRadius: 4,
                border: '1px solid rgba(11, 114, 133, 0.1)',
                position: 'relative',
                minHeight: 300,
              }}
            >
              <FormatQuote
                sx={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  fontSize: 40,
                  color: 'primary.main',
                  opacity: 0.3,
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  style={{ textAlign: 'center' }}
                >
                  <Avatar
                    src={testimonials[currentTestimonial].avatar}
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      border: '4px solid',
                      borderColor: 'primary.light',
                    }}
                  />

                  <Box sx={{ mb: 2 }}>
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star key={i} sx={{ color: '#FFD700', fontSize: 24 }} />
                      )
                    )}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontStyle: 'italic',
                      mb: 3,
                      color: 'text.primary',
                      lineHeight: 1.6,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      minHeight: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    "{testimonials[currentTestimonial].quote}"
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary.main',
                      mb: 0.5,
                    }}
                  >
                    {testimonials[currentTestimonial].author}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {testimonials[currentTestimonial].role}
                  </Typography>
                </motion.div>
              </AnimatePresence>

              <IconButton
                onClick={prevTestimonial}
                sx={{
                  position: 'absolute',
                  left: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                <ArrowBackIos />
              </IconButton>

              <IconButton
                onClick={nextTestimonial}
                sx={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                <ArrowForwardIos />
              </IconButton>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 3,
                  gap: 1,
                }}
              >
                {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor:
                        index === currentTestimonial
                          ? 'primary.main'
                          : 'grey.300',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor:
                          index === currentTestimonial
                            ? 'primary.dark'
                            : 'grey.400',
                      },
                    }}
                  />
                ))}
              </Box>
            </Card>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Card
              sx={{
                p: 6,
                background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                color: 'white',
                borderRadius: 4,
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                }}
              >
                {t('communityTitle')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  opacity: 0.95,
                }}
              >
                {t('communityText')}
              </Typography>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
