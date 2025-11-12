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
  Public,
  School,
  Groups,
  Email,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { Button } from '../../shared/components';
import { APP_CONFIG } from '../../utils/constants';

export const Vision = () => {
  const t = useTranslations('vision');

  const visionItems = [
    {
      icon: <Public sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: t('expansion'),
      description: t('expansionText'),
    },
    {
      icon: <School sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: t('education'),
      description: t('educationText'),
    },
    {
      icon: <Groups sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: t('community'),
      description: t('communityText'),
    },
  ];

  return (
    <Box
      id="vision"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: 'white',
            }}
          >
            {t('title')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              opacity: 0.9,
              fontWeight: 400,
            }}
          >
            {t('subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {visionItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    backgroundColor: 'white',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 3 }}>
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Card
            sx={{
              maxWidth: 600,
              mx: 'auto',
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Email sx={{ fontSize: 48, color: 'white', mb: 2 }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: 'white',
              }}
            >
              {t('partnership')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              ¿Eres una organización, institución educativa o empresa interesada en colaborar? Trabajemos juntos para hacer la diferencia.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href={`mailto:${APP_CONFIG.email}?subject=Colaboración con Bridge`}
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
            >
              {t('contact')}
            </Button>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};