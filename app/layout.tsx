import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import { ThemeProvider } from '@/lib/ThemeContext';
import { AuthProvider } from '@/lib/AuthContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Pecify Solution - Modern UPI Payment Gateway',
  description: 'Secure, fast, and reliable UPI payment gateway for your business. Accept payments seamlessly with Pecify Solution.',
  keywords: ['payment gateway', 'UPI', 'payment processing', 'secure payments', 'Pecify'],
  authors: [{ name: 'Pecify Solution' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#A78BFA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
