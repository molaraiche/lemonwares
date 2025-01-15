import { links } from "@/constants/Links";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=' text-white container mx-auto w-full'>
      <div className='flex items-center justify-between'>
        <div className='flex  justify-center flex-col'>
          <Image
            src='/assets/footer-logo.png'
            alt='Logo'
            width={120}
            height={80}
          />
          <p className='w-[296px] my-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elem
          </p>
        </div>
        <div className='flex w-full items-start justify-evenly'>
          {links.map((link) => (
            <div className='' key={link.id}>
              <h2 className='font-bold leading-6'> {link.type} </h2>
              <p className='my-6'> {link.one} </p>
              <p className='my-6'> {link.two} </p>
              {link.three && <p className='my-6'> {link.three} </p>}
              {link.four && <p className='my-6'> {link.four} </p>}
            </div>
          ))}
        </div>
      </div>
      <div className=''>
        built by
        <a href='https://www.molaraiche.com/' target='_blank' className='mx-2'>
          molaraiche
        </a>
        , copyright &copy; 2025
      </div>
    </footer>
  );
};

export default Footer;
