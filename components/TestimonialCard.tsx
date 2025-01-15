import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  img,
  description,
  author,
  position,
}: {
  img: string;
  description: string;
  author: string;
  position: string;
}) => {
  return (
    <div className='w-[350px] max-h-[468px] shadow-dark-shadow rounded-lg py-[40px] px-[55px]'>
      <Image src={img} alt='' width={120} height={60} className='mb-5' />
      <div className='flex gap-4 items-start justify-center'>
        <Image
          src={"/assets/quote-blue.svg"}
          alt='quote'
          width={16}
          height={14}
        />
        <div className='font-inter'>
          <p className='mb-6'>{description} </p>
          <div className=''>
            <p className='text-lg text-Text/Gray-900 font-bold'> {author} </p>
            <p className='text-Text/Gray-700'> {position} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
