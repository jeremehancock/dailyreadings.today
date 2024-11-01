import DarkModeToggle from '@/components/DarkModeToggle';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme';
import { ReactNode } from 'react'; // Import ReactNode for typing
import Image from 'next/image';

// Define the metadata for the layout
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

// Define the props interface
interface RootLayoutProps {
  children: ReactNode; // Specify children as a ReactNode
}

// Root layout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <DarkModeToggle />
        </ThemeProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
          var sc_project=13054675; var sc_invisible=1; var
          sc_security="f6b976e6"&quot;";
              `,
          }}
        />
        <script
          type="text/javascript"
          src="https://www.statcounter.com/counter/counter.js"
          async
        ></script>
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics"
              href="https://statcounter.com/"
              target="_blank"
            >
              <Image
                className="statcounter"
                src="https://c.statcounter.com/13054675/0/f6b976e6/1/"
                alt="Web Analytics"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  );
}
