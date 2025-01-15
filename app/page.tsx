import Clients from "@/components/Clients";
import Cloud from "@/components/Cloud";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";

const App = () => {
  return (
    <section className='flex flex-col items-center my-20'>
      <Hero />
      <Cloud />
      <Packages />
      <Testimonials />
      <Clients />
      <CTA />
    </section>
  );
};

export default App;
