'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  CameraAlt,
  Psychology,
  RecordVoiceOver,
  Speed,
  CheckCircle,
  AccessibilityNew,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

export const HowItWorks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const t = useTranslations('howItWorks');

  const steps = [
    {
      icon: <CameraAlt sx={{ fontSize: 48, color: 'white' }} />,
      title: t('step1Title'),
      description: t('step1Description'),
      color: '#0B7285',
    },
    {
      icon: <Psychology sx={{ fontSize: 48, color: 'white' }} />,
      title: t('step2Title'),
      description: t('step2Description'),
      color: '#66D9E8',
    },
    {
      icon: <RecordVoiceOver sx={{ fontSize: 48, color: 'white' }} />,
      title: t('step3Title'),
      description: t('step3Description'),
      color: '#0B7285',
    },
  ];

  const features = [
    {
      icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('realTime'),
      description: t('realTimeDesc'),
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('accuracy'),
      description: t('accuracyDesc'),
    },
    {
      icon: <AccessibilityNew sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('accessibility'),
      description: t('accessibilityDesc'),
    },
  ];

  return (
    <Box
      id="how-it-works"
      sx={{ py: 10, backgroundColor: 'background.default' }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: 'primary.main',
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
            }}
          >
            {t('subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 10 }}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'visible',
                  pt: 6,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${step.color}25`,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -30,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 20px ${step.color}40`,
                  }}
                >
                  {step.icon}
                </Box>
                
                <CardContent sx={{ pt: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
              color: 'primary.main',
            }}
          >
            {t('features')}
          </Typography>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    border: '2px solid',
                    borderColor: 'primary.light',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 8px 30px rgba(11, 114, 133, 0.25)',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: 'white',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'grey.100',
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};