import Link from 'next/link';
import { ReactElement } from 'react';

export default function Navbar(): ReactElement {
  return (
    <nav className='sticky top-0 border-b-2 border-b-[#202020] bg-black/10 backdrop-blur-xl z-10'>
      <div className='container max-md:px-5 mx-auto h-20 flex items-center'>
        <Link href='/' className='font-semibold text-2xl'>
          NFTIFY
        </Link>
        <Link href='/custom' className='ml-auto'>
          Custom
        </Link>
      </div>
    </nav>
  );
}
