import { configureStore } from '@reduxjs/toolkit';
import formDataCards from './slice/formDataCardsSlice';
import Countries from './slice/countrySlice';

const store = configureStore({
  reducer: {
    cards: formDataCards.reducer,
    countries: Countries.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
