import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import glossarySlice from '../features/glossaryInput/glossarySlice'

export const store = configureStore({
  reducer: {
    glossary: glossarySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
