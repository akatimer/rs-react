import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CardsType = {
  name: string;
  age: string;
  email: string;
  password: string;
  confirm: string;
  gender: string;
  terms?: boolean;
  image?: string | null | File;
  country: string;
};

interface CardsState {
  cards: CardsType[];
  images: string[];
}

const initialState: CardsState = {
  cards: [],
  images: [],
};

const formControledDataCards = createSlice({
  name: 'cardsControled',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<CardsType>) {
      state.cards.push(action.payload);
    },
    setImages: (state, action: PayloadAction<string>) => {
      state.images = [...state.images, action.payload];
    },
  },
});

export const { setCards, setImages } = formControledDataCards.actions;

export default formControledDataCards;
