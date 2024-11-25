'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';
import { FC, ReactNode } from 'react';
import { Navigation } from '@/component/Navigation';

type Props = Readonly<{
  children: ReactNode;
}>

const Layout: FC<Props> = ({
  children,
}) => (
  <html lang="fr">
  <body>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      {children}
    </ThemeProvider>
  </body>
  </html>
);

export default Layout;