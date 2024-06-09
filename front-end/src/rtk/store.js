import { configureStore } from '@reduxjs/toolkit';
import  conversationSlice  from './slices/conversationSlice';

export const store = configureStore({
  reducer: {
    conversations: conversationSlice,
  },
});