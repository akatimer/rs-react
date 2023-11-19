import { createSlice } from '@reduxjs/toolkit';

const sliceAllManga = createSlice({
  name: 'allManga',
  initialState: { allManga: null },
  reducers: {
    setAllManga(state, action) {
      state.allManga = action.payload;
    },
  },
});

export default sliceAllManga;
