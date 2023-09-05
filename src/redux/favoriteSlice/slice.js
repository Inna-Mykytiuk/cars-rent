import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: [],
    reducers: {
        plusToFavoriteList(state, action) {
            return state = [...state, action.payload];
        },
        minusToFavoriteList(state, action) {
            return state = state.filter(user => user !== action.payload);
        },
    }
});
export const { plusToFavoriteList, minusToFavoriteList } = favoriteSlice.actions;
