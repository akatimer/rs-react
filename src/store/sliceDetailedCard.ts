import { createSlice } from '@reduxjs/toolkit';

const sliceDetailedCard = createSlice({
  name: 'detaildeCard',
  initialState: { detailedCard: null },
  reducers: {
    setDetaildedCard(state, action) {
      state.detailedCard = action.payload;
    },
  },
});

export default sliceDetailedCard;
