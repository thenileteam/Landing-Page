import { createSlice } from "@reduxjs/toolkit";
import storeImg from '../../assets/store-2.svg'
import storeImg2 from '../../assets/store.svg'
const initialState = {
  sliderSettings: {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
  },
  sliderImages:[storeImg, storeImg2],
};

const sliderSlice = createSlice({
  name: "mainSlider",
  initialState,
    reducers: {
        autoplay: (state, action) => {
            state.sliderSettings.autoplay = action.payload;
        },
        updateSliderSettings: (state, action) => {
            state.sliderSettings = { ...state.sliderSettings, ...action.payload };
        },
    }
});
export const { autoplay, updateSliderSettings } =
  sliderSlice.actions;
export default sliderSlice.reducer;