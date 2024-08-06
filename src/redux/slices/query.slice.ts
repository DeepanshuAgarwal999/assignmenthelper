import { createSlice } from "@reduxjs/toolkit";

type Queries = {
  allQueries: TypeAssignment[] | null;
  allOrders: any[] | null;
};
const initialState: Queries = {
  allQueries: null,
  allOrders: null,
};
const querySlice = createSlice({
  name: "queries",
  initialState,
  reducers: {
    setQueries: (state, action) => {
      state.allQueries = action.payload;
    },
    setOrders: (state, action) => {
      state.allOrders = action.payload;
    },
  },
});
export const { setQueries, setOrders } = querySlice.actions;
export default querySlice.reducer;
