import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          color="white"
          href="/favicon.svg"
        />
        <meta name="apple-mobile-web-app-title" content="Daily Readings" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
