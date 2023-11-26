import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import searchManga from '../utils/api/searchManga';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchManga.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
