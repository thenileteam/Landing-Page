import { useDispatch } from "react-redux";
import {
  setHoverState,
  updateCurrentElement,
} from "../features/Slider/sliderSlice";
const SettingUp = ({ id, heading }) => {
  const dispatch = useDispatch();
  return (
    <article
      className="mb-12 cursor-pointer"
      onMouseEnter={() => {
        console.log("Hovered on element:", id);
        //set isHovered to true and update the currentElement
        dispatch(setHoverState({ isHovered: true }));
        dispatch(updateCurrentElement(id));
      }}
      onMouseLeave={() => {
        dispatch(setHoverState({ isHovered: false }));
        // retain the id
        // dispatch(updateCurrentElement(id));
      }}
    >
      <li className="font-extrabold text-lg lg:text-2xl list-disc">
        {heading}
      </li>
      <hr />
    </article>
  );
};

export default SettingUp;
