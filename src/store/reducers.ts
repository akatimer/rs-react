import { combineReducers } from '@reduxjs/toolkit';
import sliceSearchValue from './sliceSearchValue';

const reducers = combineReducers({
  searchValue: sliceSearchValue.reducer,
});

export default reducers;
