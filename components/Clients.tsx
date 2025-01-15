import { clients } from "@/constants/testemonials";
import Image from "next/image";

const Clients = () => {
  return (
    <div className='my-20 flex  items-center justify-evenly w-full'>
      <div className='w-[445px]'>
        <h1 className='text-5xl text-Text/Gray-900 font-extrabold leading-[64px] font-inter '>
          We serve over 100 Nigerian Websites
        </h1>
        <p className='text-lg text-Text/Gray-900 leading-[32px] self-stretch'>
          Connect LemonWares with your favourite tools that you use daily and
          keep things on track.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-20 items-center'>
        {clients.map((client: { img: string; id: number }) => (
          <Image
            src={client.img}
            key={client.id}
            alt='clients'
            width={120}
            height={120}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
