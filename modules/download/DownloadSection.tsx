'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Download,
  Android,
  Apple,
  Storage,
  Videocam,
  Wifi,
  PhoneAndroid,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { Button } from '../../shared/components';

export const DownloadSection = () => {
  const t = useTranslations('download');

  const requirements = [
    {
      icon: <PhoneAndroid sx={{ color: 'primary.main' }} />,
      text: t('androidVersion'),
    },
    {
      icon: <Storage sx={{ color: 'primary.main' }} />,
      text: t('storage'),
    },
    {
      icon: <Videocam sx={{ color: 'primary.main' }} />,
      text: t('camera'),
    },
    {
      icon: <Wifi sx={{ color: 'primary.main' }} />,
      text: t('internet'),
    },
  ];

  const handleDownload = () => {
    window.open('/bridge-app-v1.0.0.apk', '_blank');
  };

  return (
    <Box id="download" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
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
            <Download sx={{ fontSize: 48, color: 'primary.main' }} />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
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
            }}
          >
            {t('subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                textAlign: 'center',
                height: '100%',
                background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                color: 'white',
              }}
            >
              <CardContent>
                <Android sx={{ fontSize: 80, mb: 3 }} />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                  }}
                >
                  Android
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                  }}
                >
                  Descarga directa del archivo APK
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Download />}
                  onClick={handleDownload}
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'grey.100',
                    },
                  }}
                >
                  {t('android')}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                textAlign: 'center',
                height: '100%',
                border: '2px solid',
                borderColor: 'grey.300',
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
                  background:
                    'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)',
                  pointerEvents: 'none',
                }}
              />
              <CardContent sx={{ position: 'relative' }}>
                <Apple sx={{ fontSize: 80, mb: 3, color: 'grey.500' }} />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: 'grey.600',
                  }}
                >
                  iOS
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: 'grey.600',
                  }}
                >
                  {t('comingSoon')}
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  disabled
                  sx={{
                    borderColor: 'grey.400',
                    color: 'grey.500',
                  }}
                >
                  {t('comingSoon')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, maxWidth: 600, mx: 'auto' }}>
          <Card sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              {t('requirements')}
            </Typography>
            <List>
              {requirements.map((requirement, index) => (
                <ListItem key={index}>
                  <ListItemIcon>{requirement.icon}</ListItemIcon>
                  <ListItemText
                    primary={requirement.text}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '1rem',
                        fontWeight: 500,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};
