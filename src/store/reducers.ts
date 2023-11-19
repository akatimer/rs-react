import { combineReducers } from '@reduxjs/toolkit';
import sliceSearchValue from './sliceSearchValue';
import sliceAllManga from './sliceAllManga';
import searchManga from '../utils/api/searchManga';

const reducers = combineReducers({
  search: sliceSearchValue.reducer,
  allManga: sliceAllManga.reducer,
  [searchManga.reducerPath]: searchManga.reducer,
});

export default reducers;
