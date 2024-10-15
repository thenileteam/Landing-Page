import { createSlice } from "@reduxjs/toolkit";
import frame1 from "../../assets/slide1.svg";
import frame2 from "../../assets/slide3.svg";
import frame3 from "../../assets/slide2.svg";
 
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
  monthlyPrice: true
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
      state.currentSlide = action.payload; 
    },
    updateSliderSettings: (state, action) => {
      console.log(action);
      state.sliderSettings = { ...state.sliderSettings, ...action.payload };
    },
    setMonthlyPrice: (state, action) => {
     state.monthlyPrice= action.payload
    }
  },
});
export const { autoplay, setHoverState, updateSliderSettings,updateCurrentElement,updateCurrentSlide,setMonthlyPrice } =
  sliderSlice.actions;
export default sliderSlice.reducer;
