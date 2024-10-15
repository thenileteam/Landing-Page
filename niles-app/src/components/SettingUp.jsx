import { useDispatch } from "react-redux";
import {
  setHoverState,
  updateCurrentElement,
} from "../features/Slider/sliderSlice";

const SettingUp = ({ id, heading, paragraph }) => {
  const dispatch = useDispatch();
  return (
      <article
        className="mb-14 cursor-pointer"
        onMouseEnter={() => {
          //set isHovered to true and update the currentElement
          dispatch(setHoverState({ isHovered: true }));
          dispatch(updateCurrentElement(id));
        }}
        onMouseLeave={() => {
          dispatch(setHoverState({ isHovered: false }));
        }}
      >
        <div className="">
          <li className="font-extrabold text-lg lg:text-2xl">{heading}</li>
          <p className="pt-2">{paragraph}</p>
        </div>
      </article>
  );
};

export default SettingUp;
