'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  People,
  Translate,
  Speed,
  ThumbUp,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';

export const Impact = () => {
  const t = useTranslations('impact');

  const metrics = [
    {
      icon: <People sx={{ fontSize: 40 }} />,
      value: '15+',
      label: t('users'),
      color: '#0B7285',
    },
    {
      icon: <Translate sx={{ fontSize: 40 }} />,
      value: '1,000+',
      label: t('translations'),
      color: '#66D9E8',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      value: '93%',
      label: t('accuracy'),
      color: '#0B7285',
    },
    {
      icon: <ThumbUp sx={{ fontSize: 40 }} />,
      value: '98%',
      label: t('satisfaction'),
      color: '#66D9E8',
    },
  ];

  return (
    <Box sx={{ py: 10 }}>
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

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {metrics.map((metric, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  background: `linear-gradient(135deg, ${metric.color}15 0%, ${metric.color}05 100%)`,
                  border: `2px solid ${metric.color}20`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 30px ${metric.color}25`,
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      backgroundColor: metric.color,
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {metric.icon}
                  </Avatar>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: metric.color,
                      mb: 1,
                    }}
                  >
                    {metric.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {metric.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, #0B728515 0%, #66D9E815 100%)',
                border: '2px solid #0B728520',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontStyle: 'italic',
                  mb: 2,
                  color: 'text.primary',
                  lineHeight: 1.4,
                }}
              >
                "{t('testimonial')}"
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                }}
              >
                {t('testimonialAuthor')}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                color: 'primary.main',
              }}
            >
              {t('communityTitle')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: 'text.secondary',
              }}
            >
              {t('communityText')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};