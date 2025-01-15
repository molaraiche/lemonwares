import { GrCheckmark } from "react-icons/gr";

const PackCard = ({ title, price }: { title: string; price: number }) => {
  return (
    <div className='border-[1.5px] border-[#C4C4C4] w-[299px] h-[716px] flex flex-col rounded-[15px] p-[34px]'>
      <h5 className='text-[28px] font-semibold font-poppins'>{title}</h5>
      <p className='text-[12px] font-poppins leading-[18px] my-5'>
        with all your customers via all conversation channels in one central
        dashboard.
      </p>
      <div className=''>
        <p className='text-[42px] font-semibold leading-8 font-poppins'>
          ${price.toFixed(2)}
        </p>
        <span className='text-sm'>per month</span>
      </div>
      <button className='border-2 border-black w-[235px] h-[50px] rounded-xl text-sm font-semibold leading-[32px] font-poppins my-5'>
        Choose this plan
      </button>
      <div className='font-inter'>
        <p className='flex items-center my-5 gap-3 '>
          <span>
            <GrCheckmark className='w-6 h-6' />
          </span>
          <span className=' font-semibold text-text-body '>2GB SSD</span>
        </p>
        <p className='flex items-center my-5 gap-3 '>
          <span>
            <GrCheckmark className='w-6 h-6' />
          </span>
          <span className=' font-semibold text-text-body '>10GB Bandwidth</span>
        </p>
        <p className='flex items-center my-5 gap-3 '>
          <span>
            <GrCheckmark className='w-6 h-6' />
          </span>
          <span className=' font-semibold text-text-body '>
            15 Email Accounts
          </span>
        </p>
        <p className='flex items-center my-5 gap-3 '>
          <span>
            <GrCheckmark className='w-6 h-6' />
          </span>
          <span className=' font-semibold text-text-body '>
            Unlimited Database
          </span>
        </p>
        <p className='flex items-center my-5 gap-3 '>
          <span>
            <GrCheckmark className='w-6 h-6' />
          </span>
          <span className=' font-semibold text-text-body '>4 Subdomains</span>
        </p>
        <p className='flex items-center my-5 gap-3 '>
          <span>
            <GrCheckmark className='w-6 h-6' />
          </span>
          <span className=' font-semibold text-text-body '>
            1 Parked Domain
          </span>
        </p>
        <p className='flex items-center my-5 gap-3 '>
          <span>
            <GrCheckmark className='w-6 h-6' />
          </span>
          <span className=' font-semibold text-text-body '>2 Websites</span>
        </p>
        <p className='flex items-center my-5 gap-3 '>
          <span>
            <GrCheckmark className='w-6 h-6' />
          </span>
          <span className=' font-semibold text-text-body '>Free SSL</span>
        </p>
        <p className='flex items-center my-5 gap-3 '>
          <span>
            <GrCheckmark className='w-6 h-6' />
          </span>
          <span className=' font-semibold text-text-body '>Softaculous</span>
        </p>
      </div>
    </div>
  );
};

export default PackCard;
