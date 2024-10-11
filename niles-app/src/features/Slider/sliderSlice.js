import { createSlice } from "@reduxjs/toolkit";
import frame3 from "../../assets/Frame-1.svg";
import frame2 from "../../assets/Frame-2.svg";
import frame1 from "../../assets/frame-3.svg";
const initialState = {
  sliderSettings: {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Initially set autoplay to false
  },
  images: [frame1, frame2, frame3],
  isHovered: false,
  currentElement: 0,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    autoplay: (state, action) => {
      state.sliderSettings.autoplay = action.payload;
    },
    setHoverState: (state, action) => {
      console.log(state);
      state.isHovered = action.payload;
    },
    updateSliderSettings: (state, action) => {
      console.log(action);
      state.sliderSettings = { ...state.sliderSettings, ...action.payload };
    },
    updateCurrentElement: (state, action) => {},
  },
});
export const { autoplay, setHoverState, updateSliderSettings } =
  sliderSlice.actions;
export default sliderSlice.reducer;
