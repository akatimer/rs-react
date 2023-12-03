import { createSlice } from '@reduxjs/toolkit';

interface CountryState {
  countryArr: string[];
}

const initialState: CountryState = {
  countryArr: ['USA', 'CANADA', 'POLAND', 'LITHUANIA'],
};

const Countries = createSlice({
  name: 'countryArr',
  initialState,
  reducers: {},
});

export default Countries;
