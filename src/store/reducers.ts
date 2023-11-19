import { combineReducers } from '@reduxjs/toolkit';
import sliceSearchValue from './sliceSearchValue';
import sliceAllManga from './sliceAllManga';
import searchManga from '../utils/api/searchManga';
import sliceDetailedCard from './sliceDetailedCard';

const reducers = combineReducers({
  search: sliceSearchValue.reducer,
  allManga: sliceAllManga.reducer,
  [searchManga.reducerPath]: searchManga.reducer,
  detailedCard: sliceDetailedCard.reducer,
});

export default reducers;
