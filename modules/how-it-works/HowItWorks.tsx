'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Card,
  IconButton,
  Grid,
  Paper,
  Stack,
} from '@mui/material';
import {
  PlayArrow,
  CameraAlt,
  TextFields,
  VolumeUp,
  Visibility,
  SmartToy,
  Timeline,
  Pause,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

interface ProcessStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  visual: React.ReactNode;
}

export const HowItWorks = () => {
  const t = useTranslations('howItWorks');
  const [currentStep, setCurrentStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      icon: <PlayArrow sx={{ fontSize: 40 }} />,
      title: t('step1Title'),
      description: t('step1Description'),
      color: '#0B7285',
      gradient: 'linear-gradient(135deg, #0B7285 0%, #0E8A9F 100%)',
      visual: (
        <Box sx={{ textAlign: 'center', py: 3 }}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 0 0 rgba(11, 114, 133, 0.4)',
                  '0 0 0 20px rgba(11, 114, 133, 0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 8px 24px rgba(11, 114, 133, 0.3)',
              }}
            >
              <PlayArrow sx={{ fontSize: 40, color: 'white' }} />
            </motion.div>
          </motion.div>
          <Typography variant="caption" color="text.secondary">
            {t('step1Caption')}
          </Typography>
        </Box>
      ),
    },
    {
      id: 2,
      icon: <CameraAlt sx={{ fontSize: 40 }} />,
      title: t('step2Title'),
      description: t('step2Description'),
      color: '#66D9E8',
      gradient: 'linear-gradient(135deg, #66D9E8 0%, #4FC3E0 100%)',
      visual: (
        <Box sx={{ textAlign: 'center', py: 3, position: 'relative' }}>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CameraAlt sx={{ fontSize: 50, color: '#66D9E8' }} />
          </motion.div>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 2, display: 'block' }}
          >
            {t('step2Caption')}
          </Typography>
        </Box>
      ),
    },
    {
      id: 3,
      icon: <Visibility sx={{ fontSize: 40 }} />,
      title: t('step3Title'),
      description: t('step3Description'),
      color: '#0B7285',
      gradient: 'linear-gradient(135deg, #0B7285 0%, #0E8A9F 100%)',
      visual: (
        <Box sx={{ textAlign: 'center', py: 3, position: 'relative' }}>
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  background:
                    'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Typography sx={{ fontSize: 40 }}>✋</Typography>
                <motion.div
                  animate={{
                    y: [-40, 40, -40],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    background:
                      'linear-gradient(90deg, transparent, #0B7285, transparent)',
                    top: 0,
                  }}
                />
              </Box>
            </motion.div>
            {[1, 2, 3, 4].map((point, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  background: '#0B7285',
                  borderRadius: '50%',
                  top: `${20 + i * 15}px`,
                  left: `${20 + i * 10}px`,
                }}
              />
            ))}
          </Box>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 2, display: 'block' }}
          >
            {t('step3Caption')}
          </Typography>
        </Box>
      ),
    },
    {
      id: 4,
      icon: <SmartToy sx={{ fontSize: 40 }} />,
      title: t('step4Title'),
      description: t('step4Description'),
      color: '#66D9E8',
      gradient: 'linear-gradient(135deg, #66D9E8 0%, #4FC3E0 100%)',
      visual: (
        <Box sx={{ textAlign: 'center', py: 3 }}>
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #66D9E8 0%, #4FC3E0 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <SmartToy sx={{ fontSize: 40, color: 'white' }} />
              </Box>
            </motion.div>
            {[1, 2, 3, 4, 5, 6].map((particle, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [0, 1, 0],
                  x: [0, Math.cos((i * 60 * Math.PI) / 180) * 60],
                  y: [0, Math.sin((i * 60 * Math.PI) / 180) * 60],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeOut',
                }}
                style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  background: '#66D9E8',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </Box>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 2, display: 'block' }}
          >
            {t('step4Caption')}
          </Typography>
        </Box>
      ),
    },
    {
      id: 5,
      icon: <TextFields sx={{ fontSize: 40 }} />,
      title: t('step5Title'),
      description: t('step5Description'),
      color: '#0B7285',
      gradient: 'linear-gradient(135deg, #0B7285 0%, #0E8A9F 100%)',
      visual: (
        <Box sx={{ textAlign: 'center', py: 3 }}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              mx: 'auto',
              maxWidth: 200,
              background: 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'monospace',
                  color: '#0B7285',
                  borderRight: '2px solid #0B7285',
                  pr: 1,
                  animation: 'blink 1s infinite',
                  '@keyframes blink': {
                    '0%, 50%': { borderColor: '#0B7285' },
                    '51%, 100%': { borderColor: 'transparent' },
                  },
                }}
              >
                {t('step5Text')}
              </Typography>
            </motion.div>
          </Paper>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 2, display: 'block' }}
          >
            {t('step5Caption')}
          </Typography>
        </Box>
      ),
    },
    {
      id: 6,
      icon: <VolumeUp sx={{ fontSize: 40 }} />,
      title: t('step6Title'),
      description: t('step6Description'),
      color: '#66D9E8',
      gradient: 'linear-gradient(135deg, #66D9E8 0%, #4FC3E0 100%)',
      visual: (
        <Box
          sx={{
            textAlign: 'center',
            py: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #66D9E8 0%, #4FC3E0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <VolumeUp sx={{ fontSize: 40, color: 'white' }} />
            </Box>
          </motion.div>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
            {t('step6Caption')}
          </Typography>
        </Box>
      ),
    },
  ];

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (!autoPlay || !isInView || !isPlaying) return;

    timerRef.current = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % processSteps.length);
    }, 4000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [autoPlay, isInView, isPlaying, processSteps.length, progressKey]);

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setIsPlaying(false);
    setProgressKey(prev => prev + 1);
  };

  const toggleAutoPlay = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    setProgressKey(prev => prev + 1);
    if (newPlayingState) {
      setAutoPlay(true);
    }
  };

  return (
    <Box
      id="how-it-works"
      ref={sectionRef}
      sx={{
        py: 12,
        background:
          'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #e8f4f8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(102, 217, 232, 0.1) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(11, 114, 133, 0.08) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              <Timeline sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
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
                color: 'text.secondary',
                fontWeight: 400,
                fontSize: '1.25rem',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {t('subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
            <Card
              sx={{
                height: '650px',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                borderRadius: 4,
                overflow: 'visible',
                boxShadow: '0 20px 60px rgba(11, 114, 133, 0.1)',
                border: '1px solid rgba(11, 114, 133, 0.1)',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  zIndex: 10,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    onClick={toggleAutoPlay}
                    sx={{
                      background:
                        'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                      color: 'white',
                      '&:hover': {
                        background:
                          'linear-gradient(135deg, #0A6B7A 0%, #5BC7DB 100%)',
                      },
                      width: 52,
                      height: 52,
                      boxShadow: '0 4px 16px rgba(11, 114, 133, 0.4)',
                      border: '3px solid white',
                    }}
                  >
                    {isPlaying ? (
                      <Pause sx={{ fontSize: 24 }} />
                    ) : (
                      <PlayArrow sx={{ fontSize: 24 }} />
                    )}
                  </IconButton>
                </motion.div>
              </Box>

              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    mb: 4,
                    p: 2,
                    borderRadius: 2,
                    background:
                      'linear-gradient(135deg, #f8fafc 0%, #e8f4f8 100%)',
                    border: '1px solid rgba(11, 114, 133, 0.1)',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: processSteps[currentStep].color,
                      mb: 1,
                    }}
                  >
                    Paso {processSteps[currentStep].id}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {processSteps[currentStep].title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: 450,
                      lineHeight: 1.6,
                    }}
                  >
                    {processSteps[currentStep].description}
                  </Typography>
                </Box>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                  >
                    {processSteps[currentStep].visual}
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
            <Box sx={{ height: { md: '650px' } }}>
              <Stack
                spacing={2}
                sx={{ height: '100%', justifyContent: 'center' }}
              >
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      onClick={() => handleStepClick(index)}
                      sx={{
                        p: 2.5,
                        cursor: 'pointer',
                        background:
                          index === currentStep
                            ? step.gradient
                            : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        color: index === currentStep ? 'white' : 'inherit',
                        border: '2px solid',
                        borderColor:
                          index === currentStep ? step.color : 'transparent',
                        boxShadow:
                          index === currentStep
                            ? `0 8px 32px ${step.color}30`
                            : '0 2px 8px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          borderColor: step.color,
                          boxShadow: `0 8px 32px ${step.color}20`,
                        },
                      }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            background:
                              index === currentStep
                                ? 'rgba(255, 255, 255, 0.2)'
                                : step.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 3,
                            color: index === currentStep ? 'white' : 'white',
                          }}
                        >
                          {React.cloneElement(step.icon as React.ReactElement, {
                            sx: { fontSize: 28 },
                          })}
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              fontSize: '1rem',
                            }}
                          >
                            {step.title}
                          </Typography>
                        </Box>
                      </Box>

                      {index === currentStep && (
                        <motion.div
                          key={`progress-${progressKey}`}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{
                            duration: autoPlay && isPlaying ? 4 : 0,
                          }}
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            height: '3px',
                            background: 'rgba(255, 255, 255, 0.5)',
                          }}
                        />
                      )}
                    </Card>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
