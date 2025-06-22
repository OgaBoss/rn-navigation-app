import { createSlice } from "@reduxjs/toolkit";

type FavoriteState = { ids: string[] };

const initialState: FavoriteState = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: { payload: { id: string }; type: string }) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (
      state,
      action: { payload: { id: string }; type: string },
    ) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export default favoriteSlice.reducer;

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
