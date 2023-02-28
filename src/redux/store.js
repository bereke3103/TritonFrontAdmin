import { configureStore } from '@reduxjs/toolkit';
import { faqApi } from './faq.Api';
import { choisingApi } from './choising.Api';
import { feedbackApi } from './feedback.Api';
import { clientApi } from './client.Api';

export const store = configureStore({
  reducer: {
    [faqApi.reducerPath]: faqApi.reducer,
    [choisingApi.reducerPath]: choisingApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      faqApi.middleware,
      choisingApi.middleware,
      feedbackApi.middleware,
      clientApi.middleware
    ),
});
