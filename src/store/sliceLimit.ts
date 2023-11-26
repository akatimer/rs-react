import { createSlice } from '@reduxjs/toolkit';

const sliceLimit = createSlice({
  name: 'sliceLimit',
  initialState: { sliceLimit: '15' },
  reducers: {
    setSliceLimit(state, action) {
      state.sliceLimit = action.payload;
    },
  },
});

export default sliceLimit;
