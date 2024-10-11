 
import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './features/Slider/sliderSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    modal:modalReducer,
  },
});
