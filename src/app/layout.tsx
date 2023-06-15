import { Providers } from '@/redux/provider';
import './globals.css';
import Navbar from './navbar';
import ClientToastContainer from '@/components/ToastContainer';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'NFT marketplacce',
  description: 'Creator: James Jin - Extreme Programming Master',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='text-white'>
        <Navbar />
        <Providers>{children}</Providers>
        <ClientToastContainer />
      </body>
    </html>
  );
}
