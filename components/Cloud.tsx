import { clouds, cloudServices } from "@/constants/cloud";
import Image from "next/image";
import CloudCard from "./CloudCard";
import { cloudServicesType } from "@/type";
const Cloud = () => {
  return (
    <div className='w-full mt-20'>
      <div className='flex justify-between items-center '>
        <div className=''>
          <h2 className='text-5xl font-inter font-extrabold text-Text/Gray 900 w-[594px]'>
            True Cloud Web Hosting
          </h2>
          <p className='text-lg text-Text/Gray 900 w-[573px] py-5'>
            True Cloud Web Hosting All of the hosting packages we offer are
            deployed instantly on our SSD powered cloud. We don&apos;t use
            dedicated servers that operate on single pieces of hardware. Our
            entire infrastructure is built to be reliable, secure, and scalable.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-20'>
          {clouds.map(
            (cloud: {
              id: number;
              img: string;
              width: number;
              height: number;
            }) => (
              <Image
                key={cloud.id}
                alt='cloud companies'
                src={cloud.img}
                width={cloud.width}
                height={cloud.height}
              />
            )
          )}
        </div>
      </div>
      <div className='flex items-center w-full justify-center gap-10 mt-20'>
        {cloudServices.map((service: cloudServicesType) => (
          <CloudCard
            img={service.img}
            title={service.title}
            description={service.description}
            key={service.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cloud;
