import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
    reducers: {
        openNavbar: (state) => {
            state.isOpen = true;
          },
          closeNavbar: (state) => {
            state.isOpen = false;
          }
  }
});

export const { openNavbar, closeNavbar } =
  modalSlice.actions;
export default modalSlice.reducer;
