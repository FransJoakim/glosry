import { createSlice } from '@reduxjs/toolkit';

const glossarySlice = createSlice({
  name: 'glossary',
  initialState: [],
  reducers: {
    addWord: (state, action) => {
      return state.concat(action.payload)
    },
  },
});
export const { addWord } = glossarySlice.actions;
export default glossarySlice.reducer;