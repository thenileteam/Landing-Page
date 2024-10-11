import { Pricing } from "../components";
import { pricing } from "../utils";

const Plan = ({ id, head, monthly, yearly, text, textArray }) => {
  return (
        <article className="border-primary border-2 rounded-semi-round lg:w-1/2 px-12 py-14" key={id}>
          <div className="text-center mb-4">
            <h4 className="text-myCustomColor-light mb-8 font-bold">{head}</h4>
            <span className="block text-myCustomColor-secondary">
              <strong>{yearly}N</strong> /Yearly
            </span>
            <span className="block text-myCustomColor-secondary">
              <strong>{monthly}N</strong> /Monthly
            </span>
            <p className="text-myCustomColor-light font-bold pt-2">{text}</p>
          </div>
          <p className="text-center font-bold">You Get</p>
          {/* Pricing */}
          <div className="text-center border ">
            {textArray.map((plan) => (
              <Pricing key={plan.id} {...plan} />
            ))}
          </div>
        </article>
  );
};

export default Plan;
