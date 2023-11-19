import { combineReducers } from '@reduxjs/toolkit';
import sliceSearchValue from './sliceSearchValue';
import sliceAllManga from './sliceAllManga';
import searchManga from '../utils/api/searchManga';
import sliceDetailedCard from './sliceDetailedCard';
import sliceLimit from './sliceLimit';

const reducers = combineReducers({
  search: sliceSearchValue.reducer,
  allManga: sliceAllManga.reducer,
  [searchManga.reducerPath]: searchManga.reducer,
  detailedCard: sliceDetailedCard.reducer,
  sliceLimit: sliceLimit.reducer,
});

export default reducers;
