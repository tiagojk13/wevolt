import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import WhatsAppButton from '@/components/whatsapp-button';
import { Toaster } from '@/components/ui/sonner';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Landing Pages e Sites Rápidos | Design + Performance',
  description: 'Sites profissionais e páginas de alta conversão com IA, código limpo e hospedagem inteligente. Pronto para começar?',
  icons: [
    { rel: 'icon', type: 'image/svg+xml', url: '/icone-wevolt.svg' },
    { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' }, // opcional para fallback
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
