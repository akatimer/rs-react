import { configureStore } from '@reduxjs/toolkit';
import formDataCards from './slice/formDataCardsSlice';
import Countries from './slice/countrySlice';
import formControledDataCards from './slice/formControledDataCardsSlice';

const store = configureStore({
  reducer: {
    cards: formDataCards.reducer,
    controledCards: formControledDataCards.reducer,
    countries: Countries.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
