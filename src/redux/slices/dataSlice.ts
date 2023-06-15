import { createSlice } from '@reduxjs/toolkit';

type TInitState = {
  nfts: any[];
};

const initialState: TInitState = {
  nfts: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
