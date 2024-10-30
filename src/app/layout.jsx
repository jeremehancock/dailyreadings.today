// layout.jsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Define the metadata for the layout
export const metadata = {
  title: 'DailyReadings.today',
  description: 'Daily Mass Readings',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'next14', 'pwa', 'next-pwa'],
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
  authors: [
    {
      name: 'Jereme Hancock',
      url: 'https://dailyreadings.today',
    },
  ],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
    { rel: 'icon', url: 'icons/icon-128x128.png' },
  ],
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
