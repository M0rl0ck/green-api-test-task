import { configureStore } from "@reduxjs/toolkit";
import { currentUserReducer } from "./reducers";
import { chatsReducer } from "./reducers";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    chats: chatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export { store };
