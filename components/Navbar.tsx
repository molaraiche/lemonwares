import Image from "next/image";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className='flex items-center justify-between my-5 font-poppins'>
      <div className='flex gap-10 items-center'>
        <Link href='/'>
          <Image
            src='/assets/logo.svg'
            alt='lemonwares Logo'
            width={91}
            height={60}
          />
        </Link>
        <Link
          href='/#our-services'
          className='text-[15px] font-semibold border-b-2 border-primary'>
          Our Services
        </Link>
      </div>
      <nav className='flex gap-[33px] font-semibold text-[15px]'>
        <Link href='/#about'>About</Link>
        <Link href='/#blog-news'>Blog&News</Link>
        <Link href='/#contact'>Contact</Link>
      </nav>
      <div className='flex items-center gap-5'>
        <Link href='/#account' className='text-[15px] font-semibold'>
          Account
        </Link>
        <Link href='/#whatsapp' className='flex items-center'>
          <span>
            <FiPhone className='text-primary w-5 h-5' />
          </span>
          <span className='font-semibold'>+2349067322844</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
