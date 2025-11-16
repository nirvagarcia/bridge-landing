'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Box, IconButton, Typography, useTheme, Portal } from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  const toggleMenu = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = async (langCode: string) => {
    if (langCode === locale) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);

    document.cookie = `NEXT_LOCALE=${langCode}; path=/; max-age=31536000; SameSite=Lax`;

    window.location.reload();
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <IconButton
        ref={buttonRef}
        onClick={toggleMenu}
        sx={{
          color: 'primary.main',
          p: 1,
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(11, 114, 133, 0.08)',
            transform: 'scale(1.05)',
          },
        }}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <LanguageIcon />
      </IconButton>

      <Portal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.2,
              }}
              style={{
                position: 'fixed',
                top: position.top,
                left: position.left,
                zIndex: 9999,
                transformOrigin: 'top left',
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 1,
                  borderColor: 'grey.200',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                  overflow: 'hidden',
                  minWidth: 120,
                  backdropFilter: 'blur(10px)',
                }}
              >
                {languages.map((language, index) => (
                  <motion.div
                    key={language.code}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Box
                      onClick={() => handleLanguageChange(language.code)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',

                        gap: 1,
                        px: 2,
                        py: 1.5,
                        cursor: 'pointer',
                        backgroundColor:
                          language.code === locale
                            ? 'primary.main'
                            : 'transparent',
                        color:
                          language.code === locale ? 'white' : 'text.primary',
                        transition: 'all 0.15s ease',
                        '&:hover': {
                          backgroundColor:
                            language.code === locale
                              ? 'primary.dark'
                              : 'grey.50',
                        },
                        '&:active': {
                          transform: 'scale(0.98)',
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: language.code === locale ? 600 : 400,
                          fontSize: '0.875rem',
                        }}
                      >
                        {language.label}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};
