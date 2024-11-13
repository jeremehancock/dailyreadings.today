import DarkModeToggle from '@/components/DarkModeToggle';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme';
import { ReactNode } from 'react'; // Import ReactNode for typing
import StatCounter from '@/components/StatCounter';

export const metadata = {
  title: 'Daily Mass Readings',
  description: 'Daily Mass Readings',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'next14', 'pwa', 'next-pwa'],
  authors: [
    {
      name: 'Jereme Hancock',
      url: 'https://dailyreadings.today',
    },
  ],
  icons: [
    { rel: 'apple-touch-icon', url: '/icons/apple-touch-icon.png' },
    { rel: 'icon', url: '/icons/favicon.svg' },
    { rel: 'shortcut-icon', url: '/icons/favicon.ico' },
  ],
};

interface RootLayoutProps {
  children: ReactNode; // Specify children as a ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <DarkModeToggle />
        </ThemeProvider>
        {/* <StatCounter /> */}
      </body>
    </html>
  );
}
