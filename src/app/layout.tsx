import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { baseFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { BrandLogo } from '@/components/brand-logo';
import { SocialMediaList } from '@/components/social-media-list';
import { ThemeToggle } from '@/components/theme-toggle';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Moisés Huaringa - portfolio web',
  description:
    'I am a Software Developer with a strong focus on creating intuitive interfaces and user-centered experiences',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('flex flex-col min-h-screen', baseFont.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="container max-w-4xl flex justify-between items-center py-6 sticky top-0 z-10 bg-background px-3 lg:px-0">
            <BrandLogo />
            <nav className="flex items-center space-x-1 lg:space-x-2">
              <SocialMediaList />
              <ThemeToggle />
            </nav>
          </header>
          <main className="container max-w-4xl flex-grow px-5 lg:px-0">
            {children}
          </main>
          <footer className="container max-w-4xl py-6 text-sm text-muted-foreground px-5 lg:px-0">
            © {new Date().getFullYear()} Moisés Huaringa. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-4CZH6B6CVY" />
    </html>
  );
}
