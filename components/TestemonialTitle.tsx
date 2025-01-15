import Image from "next/image";

const TestemonialTitle = () => {
  return (
    <div className=' items-center w-full'>
      <Image src='/assets/quote.svg' alt='quote' width={100} height={100} />
      <div className='absolute top-8 left-16 '>
        <h1 className='text-5xl leading-[64px] font-extrabold text-Text/Gray-900 font-inter w-[445px]'>
          Real Stories from Real Customers
        </h1>
        <p className='text-lg text-Text/Gray-900 font-inter'>
          Get inspired by these stories.
        </p>
      </div>
    </div>
  );
};

export default TestemonialTitle;
