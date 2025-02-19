import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: JSON.parse(localStorage.getItem("loginUser"))?.userName || null,
  email: JSON.parse(localStorage.getItem("loginUser"))?.userEmail || null,
  photo: JSON.parse(localStorage.getItem("loginUser"))?.photoURL || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.photo = action.payload.photo;
      state.email = action.payload.email;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.photo = null;
      state.email = null;
      localStorage.removeItem("loginUser");
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
