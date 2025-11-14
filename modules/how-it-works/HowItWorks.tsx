'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Card,
  useTheme,
  IconButton,
} from '@mui/material';
import {
  PlayArrow,
  CameraAlt,
  TextFields,
  VolumeUp,
  Language,
  CheckCircle,
  ArrowForward,
  Visibility,
  SmartToy,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

interface ProcessStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  animation: string;
}

export const HowItWorks = () => {
  const theme = useTheme();
  const t = useTranslations('howItWorks');
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      icon: <PlayArrow sx={{ fontSize: 40, color: 'white' }} />,
      title: 'Ingresar a Bridge',
      description:
        'El usuario abre la aplicación Bridge y accede a la interfaz de traducción',
      color: '#0B7285',
      animation: 'fadeIn',
    },
    {
      id: 2,
      icon: <CameraAlt sx={{ fontSize: 40, color: 'white' }} />,
      title: 'Activar Captura',
      description:
        'Presiona el botón de play para iniciar la captura de gestos en tiempo real',
      color: '#66D9E8',
      animation: 'pulse',
    },
    {
      id: 3,
      icon: <Visibility sx={{ fontSize: 40, color: 'white' }} />,
      title: 'Detección de Señas',
      description:
        'La cámara captura y detecta las señas LSP en tiempo real con precisión',
      color: '#0B7285',
      animation: 'scan',
    },
    {
      id: 4,
      icon: <SmartToy sx={{ fontSize: 40, color: 'white' }} />,
      title: 'Análisis IA',
      description:
        'Los modelos de IA analizan, clasifican y limpian los gestos formando palabras y oraciones',
      color: '#66D9E8',
      animation: 'process',
    },
    {
      id: 5,
      icon: <TextFields sx={{ fontSize: 40, color: 'white' }} />,
      title: 'Texto en Tiempo Real',
      description:
        'El usuario ve su oración traducida a texto en tiempo real en la pantalla',
      color: '#0B7285',
      animation: 'typewriter',
    },
    {
      id: 6,
      icon: <VolumeUp sx={{ fontSize: 40, color: 'white' }} />,
      title: 'Audio TTS',
      description:
        'La oración generada se reproduce en audio usando síntesis de voz en tiempo real',
      color: '#66D9E8',
      animation: 'soundWave',
    },
    {
      id: 7,
      icon: <Language sx={{ fontSize: 40, color: 'white' }} />,
      title: 'Traducción Multiidioma',
      description:
        'Opcionalmente, traduce a otros idiomas (inglés, portugués) con audio en el idioma seleccionado',
      color: '#0B7285',
      animation: 'translate',
    },
  ];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const getStepAnimation = (animation: string): any => {
    switch (animation) {
      case 'pulse':
        return {
          scale: [1, 1.05, 1],
          transition: { duration: 1, repeat: Infinity },
        };
      case 'scan':
        return {
          boxShadow: [
            '0 0 0 0 rgba(11, 114, 133, 0.7)',
            '0 0 0 20px rgba(11, 114, 133, 0)',
          ],
          transition: { duration: 1.5, repeat: Infinity },
        };
      case 'process':
        return {
          rotate: [0, 360],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          },
        };
      case 'soundWave':
        return {
          scaleY: [1, 1.2, 0.8, 1.1, 1],
          transition: { duration: 1.5, repeat: Infinity },
        };
      default:
        return {};
    }
  };

  return (
    <Box
      id="how-it-works"
      ref={sectionRef}
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #fafafa 0%, #e8f4f8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(circle at 25% 25%, #0B7285 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #66D9E8 0%, transparent 50%)`,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
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
                mb: 4,
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Descubre cómo Bridge transforma las señas LSP en comunicación
              fluida paso a paso
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 6,
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  onClick={() => handleStepClick(index)}
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor:
                      index === currentStep
                        ? step.color
                        : 'rgba(11, 114, 133, 0.1)',
                    color: index === currentStep ? 'white' : 'text.secondary',
                    m: 0.5,
                    border: index === currentStep ? '3px solid' : '2px solid',
                    borderColor:
                      index === currentStep ? 'white' : 'transparent',
                    boxShadow:
                      index === currentStep
                        ? `0 8px 25px ${step.color}40`
                        : 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: step.color,
                      color: 'white',
                    },
                  }}
                >
                  <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {step.id}
                  </Box>
                </IconButton>
              </motion.div>
            ))}
          </Box>

          {/* Current Step Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, type: 'spring' }}
            >
              <Card
                sx={{
                  maxWidth: 800,
                  mx: 'auto',
                  p: 6,
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '2px solid',
                  borderColor: `${processSteps[currentStep].color}30`,
                  boxShadow: `0 20px 60px ${processSteps[currentStep].color}20`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <motion.div
                    animate={getStepAnimation(
                      processSteps[currentStep].animation
                    )}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: processSteps[currentStep].color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        boxShadow: `0 8px 25px ${processSteps[currentStep].color}40`,
                      }}
                    >
                      {processSteps[currentStep].icon}
                    </Box>
                  </motion.div>

                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 'bold',
                        color: processSteps[currentStep].color,
                        mb: 1,
                      }}
                    >
                      Paso {processSteps[currentStep].id}:{' '}
                      {processSteps[currentStep].title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {processSteps[currentStep].description}
                    </Typography>
                  </Box>
                </Box>

                {/* Visual representation area */}
                <Box
                  sx={{
                    height: 200,
                    backgroundColor: 'rgba(11, 114, 133, 0.05)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Animated visual elements based on current step */}
                  {currentStep === 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Box sx={{ textAlign: 'center' }}>
                        <PlayArrow
                          sx={{ fontSize: 80, color: 'primary.main', mb: 2 }}
                        />
                        <Typography variant="h6" color="primary">
                          Bienvenido a Bridge
                        </Typography>
                      </Box>
                    </motion.div>
                  )}

                  {currentStep === 1 && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                    >
                      <CameraAlt sx={{ fontSize: 80, color: 'primary.main' }} />
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <Box sx={{ position: 'relative' }}>
                      <motion.div
                        animate={{
                          boxShadow: [
                            '0 0 0 0 rgba(11, 114, 133, 0.7)',
                            '0 0 0 40px rgba(11, 114, 133, 0)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <Visibility
                          sx={{ fontSize: 80, color: 'primary.main' }}
                        />
                      </motion.div>
                    </Box>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <SmartToy sx={{ fontSize: 80, color: 'primary.main' }} />
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: 'monospace',
                            backgroundColor: 'rgba(11, 114, 133, 0.1)',
                            p: 2,
                            borderRadius: 1,
                          }}
                        >
                          "Hola, ¿cómo estás?"
                        </Typography>
                      </motion.div>
                    </Box>
                  )}

                  {currentStep === 5 && (
                    <motion.div
                      animate={{ scaleY: [1, 1.5, 0.5, 1.2, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <VolumeUp sx={{ fontSize: 80, color: 'primary.main' }} />
                    </motion.div>
                  )}

                  {currentStep === 6 && (
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                      <motion.div
                        animate={{ x: [0, 20, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <Language
                          sx={{ fontSize: 60, color: 'primary.main' }}
                        />
                      </motion.div>
                      <ArrowForward
                        sx={{ fontSize: 40, color: 'text.secondary' }}
                      />
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                          EN
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          PT
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          FR
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Key Features Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 10 }}>
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
              <CheckCircle sx={{ fontSize: 60, mb: 3 }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                Todo en Tiempo Real
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.95 }}
              >
                Bridge procesa las señas LSP y genera texto y audio
                instantáneamente, creando una experiencia de comunicación fluida
                y natural que rompe todas las barreras.
              </Typography>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
