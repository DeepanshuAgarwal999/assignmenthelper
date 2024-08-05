import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
// import { googleLogout } from "@react-oauth/google";
import { userType } from "../../interfaces/user.type";

const initialState: UserState = {
  token: null,
  userType: null,
  refresh_token: null,
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, refresh_token, userType, userInfo } = action.payload;
      state.token = token;
      state.userInfo = userInfo;
      state.userType = userType as userType;
      if (refresh_token) {
        state.refresh_token = refresh_token;
      }
    },
    logOut: (state) => {
      state.token = null;
      state.userType = null;
      state.refresh_token = null;
      state.userInfo = null;
      localStorage.clear();
      // window.location.href = "/";
      // if (state.userType && state.userType === "google_user") googleLogout();
    },
  },
});

export const { setCredentials, logOut } = userSlice.actions;
export default userSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.user;
