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
    autoplaySpeed: 2000
  },
  images: [frame1, frame2, frame3],
  isHovered: false,
  currentElement: 0,
  currentSlide: 0,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    autoplay: (state, action) => {
      state.sliderSettings.autoplay = action.payload;
    },
    setHoverState: (state, action) => {
      state.isHovered = action.payload;
    },
    updateCurrentElement: (state, action) => {
      state.currentElement = action.payload;
    },
    updateCurrentSlide: (state, action) => {
      state.currentSlide = action.payload; // Update currentSlide in the state
    },
    updateSliderSettings: (state, action) => {
      console.log(action);
      state.sliderSettings = { ...state.sliderSettings, ...action.payload };
    },
  },
});
export const { autoplay, setHoverState, updateSliderSettings,updateCurrentElement,updateCurrentSlide } =
  sliderSlice.actions;
export default sliderSlice.reducer;
