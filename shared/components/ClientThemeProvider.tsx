'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../themes/theme';

export function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}