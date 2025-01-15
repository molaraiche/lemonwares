import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const CTA = () => {
  return (
    <div className='bg-[#F7FAFE] relative'>
      <Image
        src='/assets/Elements.svg'
        alt=''
        width={1232}
        height={432}
        className='rounded-2xl'
      />
      <div className='absolute top-12'>
        <h1 className='text-[64px] font-poppins text-Text/Title font-semibold leading-[88px] text-center'>
          We&apos;re here to make your website awesome.
        </h1>
        <div className='flex items-center justify-center mt-10'>
          <button className='flex bg-primary text-white font-poppins py-3 px-4 rounded-lg gap-2'>
            {" "}
            <FaWhatsapp className='w-[25px] h-[25px]' /> Get in touch with us
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default CTA;
