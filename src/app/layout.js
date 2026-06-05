import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Next.js Product Catalog',
  description: 'DummyJSON integration challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
