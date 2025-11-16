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
import {
  LinkedIn,
  GitHub,
  LocationOn,
  GroupAdd,
  Group,
} from '@mui/icons-material';
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
      experience: t('experience.nirvana'),
      techStack: [
        t('techList.python'),
        t('techList.react'),
        t('techList.typescript'),
        t('techList.nodejs'),
      ],
      highlights: [
        t('highlights.softwareArchitecture'),
        t('highlights.fullstack'),
        t('highlights.iaGenerativa'),
        t('highlights.uxUi'),
      ],
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
      experience: t('experience.michelle'),
      techStack: [
        t('techList.django'),
        t('techList.mysql'),
        t('techList.python'),
        t('techList.restfulApis'),
      ],
      highlights: [
        t('highlights.backendArchitecture'),
        t('highlights.databaseDesign'),
        t('highlights.apiDevelopment'),
      ],
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              gap: 2,
            }}
          >
            <Group sx={{ fontSize: 48, color: 'primary.main' }} />
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

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={6} lg={5} key={index}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  background:
                    'linear-gradient(135deg, rgba(11, 114, 133, 0.03) 0%, rgba(102, 217, 232, 0.03) 100%), rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(11, 114, 133, 0.1)',
                  borderRadius: '24px',
                  boxShadow:
                    '0 8px 32px rgba(11, 114, 133, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(11, 114, 133, 0.2)',
                    border: '1px solid rgba(11, 114, 133, 0.2)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background:
                      'linear-gradient(90deg, #0B7285, #66D9E8, #0B7285)',
                    opacity: 0.8,
                  },
                }}
              >
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'center', sm: 'flex-start' },
                      gap: 3,
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 120, sm: 100 },
                          height: { xs: 120, sm: 100 },
                          borderRadius: '50%',
                          background:
                            'conic-gradient(#0B7285, #66D9E8, #0B7285)',
                          p: '3px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Avatar
                          src={member.avatar}
                          alt={member.name}
                          sx={{
                            width: '100%',
                            height: '100%',
                            border: '3px solid white',
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 8,
                          right: 8,
                          width: 16,
                          height: 16,
                          borderRadius: '50%',
                          background:
                            'linear-gradient(135deg, #4CAF50, #8BC34A)',
                          border: '2px solid white',
                          boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)',
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        flex: 1,
                        textAlign: { xs: 'center', sm: 'left' },
                        minWidth: 0,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          justifyContent: { xs: 'center', sm: 'flex-start' },
                          mb: 0.5,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            background:
                              'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '12px',
                            background:
                              'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                            color: 'white',
                            fontSize: '10px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: 0.5,
                          }}
                        >
                          {member.experience}
                        </Box>
                      </Box>

                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 600,
                          mb: 1.5,
                          fontSize: '16px',
                        }}
                      >
                        {member.role}
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 0.8,
                          mb: 2,
                          justifyContent: { xs: 'center', sm: 'flex-start' },
                        }}
                      >
                        {member.highlights.map((highlight, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              background: 'rgba(11, 114, 133, 0.08)',
                              border: '1px solid rgba(11, 114, 133, 0.15)',
                              borderRadius: '8px',
                              fontSize: '12px',
                              fontWeight: 500,
                              color: '#0B7285',
                            }}
                          >
                            {highlight}
                          </Box>
                        ))}
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1,
                          justifyContent: { xs: 'center', sm: 'flex-start' },
                        }}
                      >
                        {member.social.linkedin && (
                          <IconButton
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                              width: 36,
                              height: 36,
                              background: 'rgba(11, 114, 133, 0.1)',
                              color: '#0B7285',
                              border: '1px solid rgba(11, 114, 133, 0.2)',
                              '&:hover': {
                                background:
                                  'linear-gradient(135deg, #0B7285, #66D9E8)',
                                color: 'white',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(11, 114, 133, 0.3)',
                              },
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <LinkedIn sx={{ fontSize: 18 }} />
                          </IconButton>
                        )}
                        {member.social.github && (
                          <IconButton
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                              width: 36,
                              height: 36,
                              background: 'rgba(11, 114, 133, 0.1)',
                              color: '#0B7285',
                              border: '1px solid rgba(11, 114, 133, 0.2)',
                              '&:hover': {
                                background:
                                  'linear-gradient(135deg, #0B7285, #66D9E8)',
                                color: 'white',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(11, 114, 133, 0.3)',
                              },
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <GitHub sx={{ fontSize: 18 }} />
                          </IconButton>
                        )}
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      background: 'rgba(11, 114, 133, 0.02)',
                      border: '1px solid rgba(11, 114, 133, 0.08)',
                      borderRadius: '12px',
                      p: 2.5,
                      mb: 2.5,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: '14px',
                      }}
                    >
                      {t('techStack')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {member.techStack.map((tech, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            px: 2,
                            py: 0.8,
                            background:
                              'linear-gradient(135deg, rgba(11, 114, 133, 0.1), rgba(102, 217, 232, 0.1))',
                            border: '1px solid rgba(11, 114, 133, 0.2)',
                            borderRadius: '16px',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#0B7285',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer',
                            '&:hover': {
                              background:
                                'linear-gradient(135deg, #0B7285, #66D9E8)',
                              color: 'white',
                              transform: 'translateY(-1px)',
                            },
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      background: 'rgba(11, 114, 133, 0.02)',
                      border: '1px solid rgba(11, 114, 133, 0.08)',
                      borderRadius: '12px',
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.primary',
                        lineHeight: 1.6,
                        fontSize: '14px',
                      }}
                    >
                      {member.description}
                    </Typography>
                  </Box>
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
              p: 5,
              background:
                'linear-gradient(135deg, rgba(11, 114, 133, 0.05) 0%, rgba(102, 217, 232, 0.05) 100%), rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(11, 114, 133, 0.15)',
              borderRadius: '24px',
              boxShadow:
                '0 8px 32px rgba(11, 114, 133, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #0B7285, #66D9E8, #0B7285)',
                opacity: 0.8,
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                boxShadow: '0 8px 24px rgba(11, 114, 133, 0.3)',
              }}
            >
              <GroupAdd sx={{ fontSize: 40, color: 'white' }} />
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('collaboration')}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.primary',
                lineHeight: 1.7,
                fontSize: '16px',
                maxWidth: '400px',
                mx: 'auto',
              }}
            >
              {t('collaborationText')}
            </Typography>

            <Button
              variant="contained"
              href={`mailto:${APP_CONFIG.email}`}
              sx={{
                background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(11, 114, 133, 0.3)',
                border: 'none',
                '&:hover': {
                  background:
                    'linear-gradient(135deg, #0A6B7D 0%, #5BC7D6 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 24px rgba(11, 114, 133, 0.4)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              {t('joinUs')}
            </Button>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};
