import { BiSolidToggleLeft } from "react-icons/bi";
import PackCard from "./PackCard";
import { packages } from "@/constants/packages";

const Packages = () => {
  return (
    <div className='my-40 w-full'>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-[50px] leading-[60px] font-semibold font-poppins'>
          Ready to get started with Lemon Wares?
        </h1>
        <p className='text-[25px] leading-[26px] mt-[38px]'>
          Choose the package that suits you
        </p>
        <div className='flex items-center justify-center mt-20'>
          <span className=' text-[25px] leading-[25px]'>Monthly</span>
          <span>
            <BiSolidToggleLeft className='w-[93px] h-[50px] text-primary cursor-pointer' />
          </span>
          <span className='flex text-[25px] leading-[25px]'>
            Yearly
            <span className='bg-[#FFE87A] w-[87px] h-[24px] text-[10px] flex items-center justify-center rounded-lg ml-[25px]'>
              20% discount
            </span>
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center  mt-20'>
        <p className='text-[30px] w-[443px] text-center border-b-4 border-primary font-semibold font-poppins cursor-pointer'>
          Basic
        </p>
        <p className='text-[30px] w-[443px] text-center border-b-4 border-gray font-semibold font-poppins cursor-pointer'>
          Premium
        </p>
      </div>
      <div className='flex items-center justify-around w-full mt-20'>
        {packages.map((pack: { title: string; price: number; id: number }) => (
          <PackCard title={pack.title} price={pack.price} key={pack.id} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
