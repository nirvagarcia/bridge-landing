import './globals.css';
import { generateMetadata as generateSEOMetadata } from '../utils/seo.config';

export const metadata = generateSEOMetadata('es');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}