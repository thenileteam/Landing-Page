import { useDispatch } from "react-redux";
import { setHoverState } from '../features/Slider/sliderSlice'
const SettingUp = ({ heading, paragraph }) => {
  const dispatch = useDispatch();
  return (
    <article
      className="mb-12 cursor-pointer"
      onMouseEnter={() => dispatch(setHoverState(true))}
      onMouseLeave={() => dispatch(setHoverState(false))}
    >
      <li className="font-extrabold text-lg lg:text-2xl list-disc">{heading}</li>
      <hr />
    </article>
  );
};

export default SettingUp;
