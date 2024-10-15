import { Pricing } from "../components";
import { useSelector } from "react-redux";
const Plan = ({ id, head, monthly, yearly, text, textArray }) => {
  const{monthlyPrice} = useSelector((store=> store.slider))
  return (
    <article
      className="border-primary border-2 rounded-semi-round lg:w-1/2 px-12 py-14"
      key={id}
    >
      <div className="text-center mb-4">
        <h4 className="text-myCustomColor-light mb-7 font-bold text-4xl">{head}</h4>
        {monthlyPrice ? (
          <span className="block text-myCustomColor-secondary ">
            <strong className="text-slate-950 text-3xl">&#8358;{monthly}</strong>{" "}
            /Monthly
          </span>
        ) : (
          <span className="block text-myCustomColor-secondary">
            <strong className="text-slate-950 text-3xl">&#8358;{yearly}</strong> Yearly
          </span>
        )}
        <p className="text-myCustomColor-light font-bold pt-2">{text}</p>
      </div>
      <p className="text-center font-bold">You Get</p>
      {/* Pricing */}
      <div className="text-center">
        {textArray.map((plan) => (
          <Pricing key={plan.id} {...plan} />
        ))}
      </div>
    </article>
  );
};

export default Plan;
