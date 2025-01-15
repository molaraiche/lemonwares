import Cloud from "@/components/Cloud";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";

const App = () => {
  return (
    <section className='flex flex-col items-center my-20'>
      <Hero />
      <Cloud />
      <Packages />
    </section>
  );
};

export default App;
