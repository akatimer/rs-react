import { combineReducers } from '@reduxjs/toolkit';
import sliceSearchValue from './sliceSearchValue';
import sliceAllManga from './sliceAllManga';

const reducers = combineReducers({
  search: sliceSearchValue.reducer,
  allManga: sliceAllManga.reducer,
});

export default reducers;
