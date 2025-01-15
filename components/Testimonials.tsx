import { testemonials } from "@/constants/testemonials";
import TestemonialTitle from "./TestemonialTitle";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className='relative gap-20 flex flex-col items-center justify-center'>
      <TestemonialTitle />
      <div className='flex items-center justify-center gap-[30px]'>
        <div className=''>
          <TestimonialCard
            img={testemonials[0].img}
            description={testemonials[0].description}
            author={testemonials[0].author}
            position={testemonials[0].position}
          />
        </div>
        <div className=''>
          <TestimonialCard
            img={testemonials[1].img}
            description={testemonials[1].description}
            author={testemonials[1].author}
            position={testemonials[1].position}
          />{" "}
          <TestimonialCard
            img={testemonials[2].img}
            description={testemonials[2].description}
            author={testemonials[2].author}
            position={testemonials[2].position}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
