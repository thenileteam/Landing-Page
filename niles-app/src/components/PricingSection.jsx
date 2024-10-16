import { Plan} from "../components";
import { plans, pricing } from "../utils";
import{setMonthlyPrice} from '../features/Slider/sliderSlice'
import { useDispatch } from "react-redux";
const PricingSection = () => {
  const dispatch = useDispatch();
  return (
    <section  id="pricingSection"className="section-spacing bg-myCustomColor-lighterGreen rounded-t-semi-round">
      <h2 className="section-header">Our Plans</h2>
      <div className="flex items-center justify-center gap-5 my-12">
        <button type="button" className="bg-primary text-pry1 w-32 py-3 font-bold rounded-very-round hover:bg-pry1 hover:text-primary transitions" onClick={()=>{dispatch(setMonthlyPrice(true))}}>Monthly</button>
        <button type="button" className="border-primary text-primary border-2 font-bold rounded-very-round w-32 py-3" onClick={()=>{dispatch(setMonthlyPrice(false))}}>Yearly</button>
      </div>
      {/* render a plan for each plan */}
      <div className="flex gap-10 flex-col lg:flex-row">
        {plans.map((item, i) => (
          <Plan key={item.id} {...item} {...pricing[i]}/>
        ))}
      </div>
      <a href="https://getnile.co/" target="_blank" rel="noopener noreferrer">
      <button type="button" className="bg-primary mt-16 mx-auto  block font-bold text-pry1 w-32 py-3 rounded-very-round  hover:bg-pry1 hover:text-primary transitions" >Sign Up Now</button>
      </a>
    </section>
  );
};

export default PricingSection;
