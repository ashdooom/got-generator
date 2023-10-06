import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './FavoritesReducer';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});

