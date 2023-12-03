import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountryState {
  countryArr: string[];
}

const initialState: CountryState = {
  countryArr: ['USA', 'CANADA', 'VOMBAT', 'UTKONOS'],
};

const Countries = createSlice({
  name: 'countryArr',
  initialState,
  reducers: {
    // setCountyArr(state, action: PayloadAction<string>) {
    //   state.countryArr.push(action.payload);
    // },
  },
});

// export const { setCountyArr } = formDataCards.actions;

export default Countries;
