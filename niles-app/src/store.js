 
import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './features/Slider/sliderSlice';
import modalReducer from './features/modal/modalSlice';
import mainSliderReducer from './features/mainSlider/mainSliderSlice'

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    modal: modalReducer,
    mainSlider:mainSliderReducer
  },
});
