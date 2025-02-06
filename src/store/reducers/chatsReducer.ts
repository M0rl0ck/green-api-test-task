import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";

type Message = {
  sender: string;
  text: string;
};
type Chat = {
  chatId: string;
  chatName: string;
  messages: Message[];
};
interface ChatsState {
  currentChat: string;
  chats: Chat[];
}

const initialState: ChatsState = {
  currentChat: "",
  chats: [],
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setCurrentChats: (state, action: PayloadAction<string>) => {
      state.currentChat = action.payload;
      if (!state.chats.find((chat) => chat.chatId === action.payload)) {
        state.chats.push({
          chatId: action.payload,
          chatName: action.payload,
          messages: [],
        });
      }
    },
  },
});

const chatsReducer = chatsSlice.reducer;
const { setCurrentChats } = chatsSlice.actions;

const useGetCurrentChats = () => {
  const currentChats = useAppSelector((state) => state.chats.currentChat);
  return currentChats;
};

const useGetChats = () => {
  const chats = useAppSelector((state) => state.chats);
  return chats;
};

export { chatsReducer, setCurrentChats, useGetCurrentChats, useGetChats };
