import React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';

export const dynamic = 'force-static';

export default function NotFound() {
  const content = {
    title: '404',
    message: 'Page not found',
    hint: 'The page you are looking for might have been moved or deleted.',
    homeCTA: 'Go Home',
    contactCTA: 'Contact Us',
    help: 'Need help? Contact our support team.',
  };

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f7fbfc 0%, #e8f4f8 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <style>{`
          @keyframes floatUp { 0% { transform: translateY(0); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0); } }
        `}</style>

        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 140,
            height: 140,
            borderRadius: 4,
            background:
              'linear-gradient(135deg, rgba(11,114,133,0.12), rgba(102,217,232,0.08))',
            mb: 4,
            mx: 'auto',
            animation: 'floatUp 4s ease-in-out infinite',
          }}
        >
          <svg
            width="96"
            height="96"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="60" height="60" rx="10" fill="#E8F7FA" />
            <path
              d="M20 40 L28 24 L36 40"
              stroke="#0B7285"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="46" cy="22" r="6" fill="#66D9E8" />
          </svg>
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {content.title}
        </Typography>

        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
          {content.message} {content.hint}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/es" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #0B7285 0%, #66D9E8 100%)',
                boxShadow: '0 10px 30px rgba(11,114,133,0.18)',
              }}
            >
              {content.homeCTA}
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button
              variant="outlined"
              size="large"
              sx={{ px: 4, borderRadius: 3 }}
            >
              {content.contactCTA}
            </Button>
          </Link>
        </Box>

        <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary' }}>
          {content.help}
        </Typography>
      </Container>
    </Box>
  );
}
