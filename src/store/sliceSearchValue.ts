import { createSlice } from '@reduxjs/toolkit';

const sliceSearchValue = createSlice({
  name: 'searchValue',
  initialState: { searchValue: localStorage.getItem('mangaSearch') ?? '' },
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setLSTerm(state, action) {
      localStorage.setItem('mangaSearch', action.payload);
    },
  },
});

export default sliceSearchValue;
