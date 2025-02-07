import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";

type Message = {
  idMessage: string;
  chatId: string;
  sender: string;
  textMessage: string;
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
      if (
        action.payload.trim() &&
        !state.chats.find((chat) => chat.chatId === action.payload)
      ) {
        state.chats.push({
          chatId: action.payload,
          chatName: action.payload,
          messages: [],
        });
      }
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      const chat = state.chats.find(
        (chat) => chat.chatId === action.payload.chatId
      );
      if (chat) {
        chat.messages.push(action.payload);
      } else {
        state.chats.push({
          chatId: action.payload.chatId,
          chatName: action.payload.chatId,
          messages: [action.payload],
        });
      }
    },
  },
});

const chatsReducer = chatsSlice.reducer;
const { setCurrentChats, addMessage } = chatsSlice.actions;

const useGetCurrentChats = () => {
  const currentChats = useAppSelector((state) => state.chats.currentChat);
  return currentChats;
};

const useGetChats = () => {
  const chats = useAppSelector((state) => state.chats);
  return chats;
};

export {
  chatsReducer,
  setCurrentChats,
  addMessage,
  useGetCurrentChats,
  useGetChats,
};
