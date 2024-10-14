import { howItWorksSteps } from "../utils";
import { SettingUp, ImageSlider } from "../components";
const HowItWorks = () => {
  return (
    <section  id='howItWorks'className="relative section-spacing">
      <div className="overlay absolute z-10 left-0 right-0 -top-7 h-8 rounded-t-very-round bg-pry1"></div>
      <div className=" bg-pry1">
      <h2 className="section-header">How It Works</h2>
        <div className="mt-20 flex-container items-center flex-col gap-10 lg:gap-5 lg:flex-row ">
          <div className="lg:w-2/5">
            {howItWorksSteps.map((item) => (
              <SettingUp key={item.id} id={item.id} {...item} />
            ))}
          </div>
          <ImageSlider />
        </div>
        <button type="button" className="bg-primary  text-pry1 block mx-auto btn-join-waitList mt-7 transitions hover:border-primary hover:border-2 hover:bg-transparent  hover:text-primary">Join The Waitlist</button>
      </div>
    </section>
  );
};

export default HowItWorks;
//   border-inspecting