import { createSlice } from "@reduxjs/toolkit";
import frame1 from "../../assets/add-product.svg";
import frame2 from "../../assets/customize.svg";
import frame3 from "../../assets/recieve-pay.svg";
const initialState = {
  sliderSettings: {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, 
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
    //update current element for hover state on desktop
    updateCurrentElement: (state, action) => {},
  },
});
export const { autoplay, setHoverState, updateSliderSettings } =
  sliderSlice.actions;
export default sliderSlice.reducer;
