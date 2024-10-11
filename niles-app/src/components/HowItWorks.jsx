import { howItWorksSteps } from "../utils";
import { SettingUp, ImageSlider } from "../components";
const HowItWorks = () => {
  return (
    <section className="relative">
      <div className="absolute -top-7 left-0 right-0 section-spacing bg-pry1 rounded-t-semi-round">
      <h2 className="section-header">How It Works</h2>
        <div className="mt-20 flex-container items-center flex-col gap-10 lg:gap-5 lg:flex-row ">
          <div className="lg:w-2/5">
            {howItWorksSteps.map((item) => (
              <SettingUp key={item.id} {...item} />
            ))}
          </div>
          <ImageSlider />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
//   border-inspecting
