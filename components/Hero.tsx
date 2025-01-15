import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className='flex items-center justify-between w-full'>
      <div className=''>
        <div className='flex gap-4 text-grey '>
          <Link
            href='/#hosting'
            className='text-primary border-b-2 border-primary font-semibold text-[15px]'>
            Hosting
          </Link>
          <Link
            href='/#domain'
            className=' border-b-2 border-grey font-semibold text-[15px]'>
            Domain
          </Link>
          <Link
            href='/#seo'
            className=' border-b-2 border-grey font-semibold text-[15px]'>
            SEO
          </Link>
          <Link
            href='/#email'
            className=' border-b-2 border-grey font-semibold text-[15px]'>
            Email
          </Link>
        </div>
        <div className=''>
          <h1 className='text-[64px] leading-[77.5px] font-bold font-poppins text-Text/Title w-[608px]'>
            Premium Web Hosting for Your Website
          </h1>
          <p className='text-text-body font-inter mt-[34px] font-normal w-[448px]'>
            Blazing fast web hosting for individuals and businesses of all sizes
            backed by 24x7x365 Support.
          </p>
          <div className='flex gap-2.5 mt-[34px]'>
            <button className='w-[160px] p-3 rounded-lg bg-primary shadow-cta-shadow text-sm text-white font-poppins'>
              Create an Account
            </button>
            <button className='w-[160px] p-3 rounded-lg border border-black font-poppins text-sm'>
              Choose your plan
            </button>
          </div>
        </div>
      </div>
      <div className=''>
        <Image src='/assets/hero.png' width={652} height={604} alt='Hero' />
      </div>
    </section>
  );
};

export default Hero;
