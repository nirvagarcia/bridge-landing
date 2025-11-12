'use client';

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
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations('about');

  const values = [
    {
      icon: <Accessibility sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: t('mission'),
      description: t('missionText'),
    },
    {
      icon: <Psychology sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: t('vision'),
      description: t('visionText'),
    },
    {
      icon: <Groups sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: t('values'),
      description: t('valuesText'),
    },
  ];

  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.default' }}>
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
          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
            {t('description')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 3 }}>
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};