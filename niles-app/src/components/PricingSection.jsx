import { Plan} from "../components";
import { plans,pricing } from "../utils";
const PricingSection = () => {
  return (
    <section  id="pricingSection"className=" section-spacing bg-myCustomColor-lighterGreen rounded-t-semi-round">
      <h2 className="section-header">Our Plan and Pricing</h2>
      <div className="flex items-center justify-center gap-5 my-12">
        <button type="button" className="bg-primary text-pry1 w-32 py-3  font-bold rounded-very-round hover:bg-pry1 hover:text-primary transitions">Monthly</button>
        <button type="button" className="border-primary text-primary border-2 font-bold rounded-very-round w-32 py-3">Yearly</button>
      </div>
      {/* render a plan for each plan */}
      <div className="flex gap-10 flex-col lg:flex-row">
        {plans.map((item,i) => (
          <Plan key={item.id} {...item}  {...pricing[i]}/>
        ))}
      </div>
      <button type="button" className="bg-primary mt-16 mx-auto  block font-bold text-pry1 w-32 py-3 rounded-very-round  hover:bg-pry1 hover:text-primary transitions">Sign Up Now</button>
    </section>
  );
};

export default PricingSection;
