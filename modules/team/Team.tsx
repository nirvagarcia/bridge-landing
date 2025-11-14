'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from '@mui/material';
import { LinkedIn, GitHub, LocationOn, GroupAdd } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { APP_CONFIG } from '../../utils/constants';
import { Button } from '../../shared/components';

export const Team = () => {
  const t = useTranslations('team');

  const teamMembers = [
    {
      name: 'Nirvana García',
      role: t('nirvaRole'),
      description: t('nirvaDescription'),
      avatar: '/placeholders/nirvana-profile.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/nirvana-garcia/',
        github: 'https://github.com/nirvagarcia',
      },
    },
    {
      name: 'Michelle Moreno',
      role: t('michelleRole'),
      description: t('michelleDescription'),
      avatar: '/placeholders/michelle-profile.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/michelle-moreno-best-1ba33b297/',
        github: 'https://github.com/MichelleFMB',
      },
    },
  ];

  return (
    <Box id="team" sx={{ py: 10 }}>
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

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 4,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 3,
                      border: '4px solid',
                      borderColor: 'primary.light',
                    }}
                  />

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      color: 'primary.main',
                    }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: 'secondary.main',
                      fontWeight: 600,
                    }}
                  >
                    {member.role}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {member.description}
                  </Typography>

                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}
                  >
                    {member.social.linkedin && (
                      <IconButton
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: 'white',
                          },
                        }}
                      >
                        <LinkedIn />
                      </IconButton>
                    )}
                    {member.social.github && (
                      <IconButton
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: 'white',
                          },
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mb: 4,
            }}
          >
            <LocationOn sx={{ color: 'primary.main' }} />
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              {t('location')}
            </Typography>
          </Box>

          <Card
            sx={{
              maxWidth: 600,
              mx: 'auto',
              p: 4,
              background:
                'linear-gradient(135deg, #0B728515 0%, #66D9E815 100%)',
              border: '2px solid #0B728520',
            }}
          >
            <GroupAdd sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: 'primary.main',
              }}
            >
              {t('collaboration')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: 'text.secondary',
                lineHeight: 1.6,
              }}
            >
              {t('collaborationText')}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={`mailto:${APP_CONFIG.email}`}
            >
              {t('joinUs')}
            </Button>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};
