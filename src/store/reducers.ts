import { combineReducers } from '@reduxjs/toolkit';
import sliceSearchValue from './sliceSearchValue';

const reducers = combineReducers({
  search: sliceSearchValue.reducer,
});

export default reducers;
