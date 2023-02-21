import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "cart",
  initialState: {
    currentUser: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
        state.isFetching = true;
    },
    
    loginSucess : (state , action)=>{
        state.isFetching = false;
        state.currentUser = action.payload;
    },
    loginfailure : (state)=>{
        state.isFetching = false;
        state.error = true;
    }

  },
});

export const { loginStart , loginSucess , loginfailure } = userSlice.actions;
export default userSlice.reducer;