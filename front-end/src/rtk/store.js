import { configureStore } from '@reduxjs/toolkit';
import  conversationSlice  from './slices/conversationSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    conversations: conversationSlice,
    users: userSlice
  },
});