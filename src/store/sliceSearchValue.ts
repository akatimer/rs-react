import { createSlice } from '@reduxjs/toolkit';

const sliceSearchValue = createSlice({
  name: 'searchValue',
  initialState: { searchValue: '' },
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export default sliceSearchValue;
