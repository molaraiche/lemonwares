import Image from "next/image";

const CloudCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className='flex flex-col items-center justify-center font-poppins'>
      <Image src={img} width={100} height={100} alt={title} className='m-3' />
      <h4 className='text-xl font-bold my-1'> {title} </h4>
      <p className='text-center font-[300] text-xs leading-normal'>
        {" "}
        {description}{" "}
      </p>
    </div>
  );
};

export default CloudCard;
