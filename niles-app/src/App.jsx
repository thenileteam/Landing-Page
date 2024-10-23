import { Navbar, Hero, PricingSection,HowItWorks,Sliders,Footer, } from "./components";

const App = () => {
  return (
    <div>
      <Navbar/> 
      <main>
        <Hero />
        <HowItWorks />
        <Sliders />
        <PricingSection/>
        <Footer/> 
      </main>
   </div>
  );
};
export default App;
